import type { AppProps } from "next/app";

import Providers from "@components/Common/Providers";
import { heyFont } from "@helpers/fonts";

import "../styles.css";
import Link from "next/link";
import Footer from "@components/Shared/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Providers>
          <style global jsx>{`
              body {
                  font-family: ${heyFont.style.fontFamily};
              }
          `}</style>
          <Component {...pageProps} />
          <div className="flex justify-center px-5 pt-2 pb-6">
              <Footer/>
          </div>

      </Providers>
  );
};

export default App;
