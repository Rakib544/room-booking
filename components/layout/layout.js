import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, title = "Book it" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
