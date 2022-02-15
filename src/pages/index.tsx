import { useState } from "react";
import type { NextPage } from "next";
import { withApollo } from "../util/withApollo";
import { useUserQuery } from "../generated/graphql";

import Layout from "../components/Layout";
import ProjectItemContent from "../components/Project/Item/ProjectItemContent";
import SubNav from "../components/Navbar/SubNav";

import classNames from "classnames";
import styles from "../styles/Home.module.scss";

// Removed skills - can add more sections as/if needed
const navItems = ["ABOUT"];

const Home: NextPage = () => {
  const [navItem, setNavItem] = useState("ABOUT");
  const { data } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });
  return (
    <Layout>
      <SubNav items={navItems} selected={navItem} setItem={setNavItem} />
      <div className={styles.content_container}>
        {navItem === "ABOUT" && (
          <>
            <div className={styles.content_section}>
              <span className="md_text">{data?.user.user?.preBio}</span>
            </div>
            <div className={styles.content_section}>
              <span className={`${styles.section_title} heavy_text`}>
                Mini Bio
              </span>
              <span className="md_text">{data?.user.user?.bio}</span>
            </div>
            {data?.user.latestRelease && (
              <div className={styles.content_section}>
                <span className={`${styles.section_title} heavy_text`}>
                  Latest Release
                </span>
                <ProjectItemContent
                  authKey="shadman"
                  project={data?.user.latestRelease}
                />
              </div>
            )}
          </>
        )}
        {navItem === "SKILLS" && (
          <div className={styles.content_section}>
            <span>SKILLS SECTION COMING SOON</span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
