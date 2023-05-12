import Footer from "@components/Footer";


export default function Layout({ children }) {
  return (
    <>
    
      <div className="main-container">{children}</div>
      <Footer />
    </>
  );
}
