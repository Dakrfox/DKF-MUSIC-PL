import "@styles/globals.css";
import Layout from "./layout/Layout";
import Footer from "@components/Footer";



export default function App({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    
  );
}
