import { useState, useContext, useEffect } from 'react';
import { RestCtx } from "../../../../core/services/rest/RestProvider";
import { useQuery } from "@apollo/client";
import { GET_OPERATIONS } from "../../../../core/model/operations/queries"; 

export default function useOperations(props: any) {
  const [preview, setPreview] = useState<any>();
  const { data, loading: loadingOperation, error } = useQuery(GET_OPERATIONS);
  const [loading, setLoading] = useState(false);
  const rest = useContext(RestCtx);

  function handleError(error: any) {
    if (error) console.log(error.message);
  }
  async function setStatus(id: any, status: string) {
    try {
      const response = await rest.mutate("PUT", id, { status });
      if (response.ok) {
        onUpdate(await response.json());
      }
    } catch (e) {
      handleError(e);
    }
  }
  function onUpdate(data: any) {}
  handleError(error); 
  
  return {
    operations: data?.operations?.edges,
    preview,
    setPreview,
    setStatus,
    loading: loadingOperation || loading,
  };
}
