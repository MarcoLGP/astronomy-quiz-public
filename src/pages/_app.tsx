import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </NextUIProvider>
    </SessionProvider>
  );
}