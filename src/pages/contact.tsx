import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../util/withApollo";

const Contact: React.FC<{}> = () => {
    return (
        <Layout>
            Contact Page
        </Layout>
    )
};
export default withApollo({ ssr: true })(Contact);
