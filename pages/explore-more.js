import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { Layout, Hero, AllTests, Footer } from "../components";
export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

  const { tests } = await graphcms.request(
    `
      { 
        tests(orderBy: publishedAt_DESC) {
          slug
          id
          title
          description
          coverImage{
            url
          }
        }
      }
    `
  );

  return {
    props: {
      tests,
    },
  };
}

const ExplorePage = ({ tests }) => {
  return (
    <Layout title="Explore more">
      <Hero text="Hi curious mind" boldText="These are all the tests we have" />
      <AllTests tests={tests} hide={false} />
      <Footer />
    </Layout>
  );
};

export default ExplorePage;
