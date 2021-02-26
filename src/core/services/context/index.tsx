import React, { createContext, useState } from "react";
import { ApolloClient, HttpLink } from "@apollo/client";
import cache from "../../model/cache";
import { RestProvider, initRest } from "../rest";
import { initIO, SocketIOProvider } from "../io";
import { GqlProvider } from "../graphql";
import fetch from "cross-fetch";
import conf from "../../../../app.config";

const initContext: any = {
  token: conf.token,
  company: conf.company,
  loading: false,
  error: {},
  preview: {},
  onlines: [], 
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

export const AppContext = createContext<any>(null);

export function AppProvider(props: any) {
  const [context, setContext] = useState(initContext);

  function setLoading(isLoading: boolean) {
    setContext({ ...context, loading: isLoading });
  }

  function setOnlines(arg: any) {
    setContext({ ...context, onlines: arg });
  } 

  function setPreview(arg: { name: string; component: any }) {
    setContext({
      ...context,
      preview: { ...context.preview, [arg.name]: arg.component },
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...context,
        setOnlines: setOnlines, 
        setLoading: setLoading,
        setPreview: setPreview,
      }}
    >
      <GqlProvider>
        <RestProvider>
          <SocketIOProvider>{props.children}</SocketIOProvider>
        </RestProvider>
      </GqlProvider>
    </AppContext.Provider>
  );
}
