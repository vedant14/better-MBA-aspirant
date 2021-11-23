import { GraphQLClient } from "graphql-request";
import { Layout, ViewTest } from "../../components";
const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

export async function getStaticProps({ params }) {
	const { test } = await graphcms.request(
		`query TestPageQuery($slug: String!){
	    test(where: {slug: $slug}) {
				id
		    slug
		    title
		    description
		    testquestions {
		      questionString
		      answers
		      trivia {
		        html
		        text
		      }
		      gif {
		        url
		      }
		    }
	    }
	  }`,
		{
			slug: params.slug,
		}
	);

	return {
		props: {
			test,
		},
	};
}

export async function getStaticPaths() {
	const { tests } = await graphcms.request(`{
    tests {
      slug
      id
      title
    }
  }`);

	return {
		paths: tests.map(({ slug }) => ({ params: { slug } })),
		fallback: false,
	};
}
const TestTemplate = ({ test }) => {
	return (
		<Layout title={test.title} description={test.description}>
			<ViewTest test={test} />
		</Layout>
	);
};

export default TestTemplate;
