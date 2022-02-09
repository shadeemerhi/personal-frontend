import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { withApollo } from "../util/withApollo";
import Navbar from "../components/Navbar";

import { useProjectsQuery } from "../generated/graphql";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            Home Page
        </Layout>
    )
};

export default withApollo({ ssr: true })(Home);
