import React from "react";
import {
  Layout,
  Hero,
  FirstTestCard,
  AllTests,
  WhyTests,
  Footer,
} from "../components";
import tests from "../data/tests.json";

const Home = ({ params, props }) => {
  return (
    <Layout>
      <Hero text="Experience the life of" boldText="a product manager" />
      <FirstTestCard />
      <WhyTests />
      <AllTests
        tests={tests}
        hide={true}
        title="Check our other tests 👇🏼"
        buttonShow={true}
      />
      <Footer />
    </Layout>
  );
};

export default Home;
