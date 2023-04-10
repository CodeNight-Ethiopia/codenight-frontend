import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
}

export default App