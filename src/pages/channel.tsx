import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../util/withApollo";

const Channel: React.FC<{}> = () => {
  return (
    <Layout>
      <span>Currently integrating the YouTube Data API. Coming soon!</span>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Channel);
