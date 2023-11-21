import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "60px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
