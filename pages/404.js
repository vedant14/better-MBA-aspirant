import React from "react";
import { Layout, Hero, Footer } from "../components";

const NotFoundPage = () => {
  return (
    <Layout>
      <Hero text="Sorry the page you requested" boldText="cannot be found" />
      <Footer />
    </Layout>
  );
};

export default NotFoundPage;
