import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeadProp from "../components/HeadProp.jsx";
function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Navbar />
        {page}
        <Footer />
      </>
    ));

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class">
      <HeadProp />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
