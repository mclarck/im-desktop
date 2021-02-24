import React, { createContext, useState } from "react";
import { ApolloClient, HttpLink } from "@apollo/client";
import cache from "../../model/cache";
import { RestProvider, initRest } from "../rest";
import { initIO } from "../io";
import { GqlProvider } from "../graphql";
import fetch from "cross-fetch";
import conf from "../../../../app.config";

const initContext: any = {
  loading: false,
  error: {},
  preview: {},
  setPreview: (preview: any) => {},
  setLoading: (isLoading: boolean) => {},
  setError: (error: any) => {},
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

  function setPreview(arg: { name: string; component: any }) {
    setContext({
      ...context,
      preview: {
        ...context.preview,
        [arg.name]: arg.component,
      },
    });
  }

  return (
    <AppContext.Provider
      value={{ ...context, setLoading: setLoading, setPreview: setPreview }}
    >
      <GqlProvider>
        <RestProvider>
          {/* <SocketIOProvider> */}
          {props.children}
          {/* </SocketIOProvider> */}
        </RestProvider>
      </GqlProvider>
    </AppContext.Provider>
  );
}
