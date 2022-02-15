import React from "react";
import Layout from "../components/Layout";
import { useUserQuery } from "../generated/graphql";
import { withApollo } from "../util/withApollo";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/material";

import styles from "../styles/contact.module.scss";

const Contact: React.FC<{}> = () => {
  const { data } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });
  console.log("HERE IS DATA", data);

  return (
    <Layout>
      <a
        target="_blank"
        href={`mailto: ${data?.user.user?.email}`}
        className={styles.contact_item}
      >
        <EmailIcon className={styles.icon} />
        <span className="md_text">{data?.user.user?.email}</span>
      </a>
      <a
        target="_blank"
        href={data?.user.user?.linkedInLink}
        className={styles.contact_item}
      >
        <LinkedInIcon className={styles.icon} />
        <span className="md_text">LinkedIn</span>
      </a>

      <a
        target="_blank"
        href={data?.user.user?.githubLink}
        className={styles.contact_item}
      >
        <GitHubIcon className={styles.icon} />
        <span className="md_text">GitHub</span>
      </a>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Contact);
