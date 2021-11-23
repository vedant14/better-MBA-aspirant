import React from "react";
import { Layout, Hero, FirstTestCard, Footer } from "../components";
import tests from "../data/tests.json";

const Home = ({ params, props }) => {
  return (
    <Layout>
      <Hero text="Experience the life of" boldText="a product manager" />
      <FirstTestCard />
      <Footer />
    </Layout>
  );
};

export default Home;
