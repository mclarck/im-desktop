import { ApolloProvider } from "@apollo/client";
import React, { useContext } from "react";
import { AppContext } from "../../../core/services/context";

export function GqlProvider({ children }: any) {
  const app: any = useContext(AppContext);
  return <ApolloProvider client={app.graphql}>{children}</ApolloProvider>;
}
