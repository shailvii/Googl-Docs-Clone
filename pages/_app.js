import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return( <ThemeProvider>
    <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        </Head>
  <Component {...pageProps} />
  </ThemeProvider>
  );
}

export default MyApp;
