import React, { createContext } from "react";
import { ApolloClient, HttpLink } from "@apollo/client";
import cache from "../model/cache";
import { RestProvider, initRest } from "./rest";
import { SocketIOProvider } from "./io";
import { initIO } from "./io";
import { GqlProvider } from "./graphql";
import fetch from "cross-fetch";
import conf from "../../../app.config";

const initContext: any = {
  io: initIO(),
  graphql: initGraphqlClient(),
  rest: initRest(),
};

function initGraphqlClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: conf?.graphql?.uri, fetch }),
    cache,
  });
}

export const AppContext = createContext<any>({});

export function AppProvider(props: any) {
  return (
    <AppContext.Provider value={initContext}>
      <GqlProvider>
        <RestProvider>
          <SocketIOProvider>{props.children}</SocketIOProvider>
        </RestProvider>
      </GqlProvider>
    </AppContext.Provider>
  );
}
