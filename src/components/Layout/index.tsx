import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import styles from './Layout.module.scss';

interface LayoutsProps {};

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Shadee Merhi</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.root}>
                <Navbar />
                <main>{children}</main>
            </div>
        </>
    );
};
export default Layouts;
