import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { withApollo } from "../util/withApollo";
import Navbar from "../components/Navbar";

import { useProjectsQuery } from "../generated/graphql";

const Home: NextPage = () => {
    

    return <>Home Page</>;
};

export default withApollo({ ssr: true })(Home);
