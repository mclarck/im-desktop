import _ from "lodash";
import { useEffect, useState, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_FULL_STOCKS } from "../../../../core/model/stock/queries";
import { AppContext } from "../../../../core/services/context";
import { t } from "../../../../core/locale";

export default function useStocks(props: any) {
  const company = "kioskito";
  const [key, setKey] = useState<string>();
  const [selected, select] = useState<any>();
  const [form, setForm] = useState<boolean>(false);
  const [fetch, { loading, data, error }] = useLazyQuery(GET_FULL_STOCKS, {
    fetchPolicy: "network-only",
  });
  const stocks = data?.stocks?.edges;
  const app = useContext(AppContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    app.setLoading(loading);
  }, [loading]);

  const filter = () =>
    _.filter(stocks, (o) => {
      if (key) {
        const regex = new RegExp(`^${key}`, "i");
        const stock = o.node;
        return (
          regex.test(stock?.product?.specie) || regex.test(stock?.product?.mark)
        );
      }
      return true;
    });
  const showForm = () => setForm(true);
  const closeForm = () => setForm(false);
  const onCreate = () => {
    fetch();
  };
  const onSelect = (data: any) => {
    select(data);
    showForm();
  };
  const onSearch = (search: string) => setKey(search);

  function getDesc(stock: any) {
    return `${stock.quantityAv || 0}/${stock.quantity || 0} ${t("from")} ${
      stock.entry?.provider?.name
    }`;
  }
  if (error) console.log(error.message);
  if (selected) console.log(selected);
  return {
    app,
    onCreate,
    selected,
    onSelect,
    select,
    company,
    form,
    showForm,
    closeForm,
    stocks,
    loading: app.loading,
    key,
    filter,
    onSearch,
    getDesc,
  };
}
