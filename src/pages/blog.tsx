import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../util/withApollo";

const Blog: React.FC<{}> = () => {
  return (
    <Layout>
      <span>Blog coming soon!</span>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Blog);
