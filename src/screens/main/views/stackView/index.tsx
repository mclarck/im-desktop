import React from "react";
import { Route, Switch } from "react-router-dom";
import Chats from "../chats";
import Home from "../home";
import Stocks from "../stocks";
import useStackView from "./useStackView";

export default function StackView(props: any) {
  const {} = useStackView(props);
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/stocks" component={Stocks} />
      <Route path="/chats" component={Chats} />
    </Switch>
  );
}
