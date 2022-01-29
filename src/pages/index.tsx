import type { NextPage } from "next";
import Head from "next/head";
import styles from '../styles/Home.module.scss';
import { withApollo } from "../util/withApollo";
import Navbar from "../components/Navbar";

import { useProjectsQuery } from "../generated/graphql";

const Home: NextPage = () => {
    const { data, loading, error } = useProjectsQuery();
    console.log("HERE IS DATA", loading, data);

    return (
        <div className={styles.container}>
            <div className="main_color">Shadee's Personal Website</div>
        </div>
    );
};

export default withApollo({ ssr: true })(Home);
