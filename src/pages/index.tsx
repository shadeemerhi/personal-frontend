import type { NextPage } from "next";
import Head from "next/head";
import { withApollo } from "../util/withApollo";

import { useUserQuery } from "../generated/graphql";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { useState } from "react";
import { Box } from "@mui/material";
import classNames from "classnames";

const navItems = ["ABOUT", "SKILLS"];

const Home: NextPage = () => {
  const [navItem, setNavItem] = useState("ABOUT");
  const { data } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });
  return (
    <Layout>
      <div className={styles.sub_nav}>
        {navItems.map((item) => (
          <span
            className={classNames({
              [styles.nav_item]: true,
              pointer: true,
              [styles._selected]: item === navItem,
            })}
            onClick={() => setNavItem(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className={styles.content_container}>
        {navItem === "ABOUT" && (
          <>
            <span className="md_text">{data?.user.preBio}</span>
            <br />
            <br />
            <br />
            <span className="heavy_text">Mini Bio</span>
            <br />
            <span className="md_text">{data?.user.bio}</span>
          </>
        )}
        {navItem === "SKILLS" && <span>SKILLS SECTION - COMING SOON</span>}
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
