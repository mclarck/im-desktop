import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Chats from "../chats"; 
import Stocks from "../stocks";
import useStackView from "./useStackView";
import Operations from "../operations";

export default function StackView(props: any) {
  const {} = useStackView(props);
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/operations" />} exact />
      <Route path="/stocks" component={Stocks} />
      <Route path="/operations" component={Operations} />
      <Route path="/chats" component={Chats} />
    </Switch>
  );
}
