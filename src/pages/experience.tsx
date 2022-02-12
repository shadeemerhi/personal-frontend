import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { withApollo } from "../util/withApollo";

import SubNav from "../components/Navbar/SubNav";
import { useAuth } from "../hooks/useAuth";
import { WorkItem } from "../types/experience";
import { Box } from "@mui/material";
import WorkItems from "../components/Experience/Work";

interface ExperiencePageProps {
  setShowForm: any;
}

const navItems = ["WORK", "EDUCATION"];

const Experience: NextPage = () => {
  const [navItem, setNavItem] = useState("WORK");

  const { authKey } = useAuth();

  return (
    <Layout>
      <SubNav items={navItems} selected={navItem} setItem={setNavItem} />
      {navItem === "WORK" && <WorkItems />}
      {/* {navItem === "EDUCATION" && <span>Education Items</span>} */}
    </Layout>
  );
};
export default withApollo({ ssr: true })(Experience);
