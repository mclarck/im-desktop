import _ from "lodash";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import useCartModel, { GET_CART_ITEMS } from "../../../../core/model/cart";
import { GET_FULL_STOCKS } from "../../../../core/model/stock/queries";

export default function useStocks(props: any) {
  const company = "kioskito";
  const { url } = useRouteMatch();
  const [key, setKey] = useState<string>();
  const [selected, select] = useState<any>();
  const [form, setForm] = useState<boolean>(false);
  const cart = useCartModel();
  const [fetch, { loading, data, error }] = useLazyQuery(GET_FULL_STOCKS, {
    fetchPolicy: "network-only",
  });
  const [getCart] = useLazyQuery(GET_CART_ITEMS);
  const stocks = data?.stocks?.edges;

  useEffect(() => {
    fetch();
    getCart();
  }, [fetch, getCart, url]);

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
  const addToCart = (order: any) => {
    cart.add(order);
    fetch();
  };
  if (error) console.log(error.message);
  return {
    onCreate,
    selected,
    onSelect,
    select,
    company,
    form,
    showForm,
    closeForm,
    stocks,
    loading,
    key,
    filter,
    onSearch,
    addToCart,
  };
}
