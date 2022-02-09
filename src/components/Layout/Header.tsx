import React, { useEffect } from "react";
import { useUserQuery } from "../../generated/graphql";
import styles from "../../styles/Layout.module.scss";
import { withApollo } from "../../util/withApollo";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { data, error } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });

  console.log("HERE IS HEADER DATA", data);

  // useEffect(() => {

  // }, [data?.user.upd])

  if (error) return null;

  return (
    <div className={styles.header_image_container}>
      <img src={data?.user.photoURL} />
      <span
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: "20px",
          left: "20px",
          fontSize: "30pt",
        }}
        className="heavy_text"
      >
        Shadee Merhi
      </span>
      <span
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: "10px",
          left: "20px",
        }}
        className="md_text heavy_text"
      >
        {data?.user.title}
      </span>
    </div>
  );
};
export default Header;
