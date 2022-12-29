import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </ThemeProvider>
   );
}

export default MyApp;
