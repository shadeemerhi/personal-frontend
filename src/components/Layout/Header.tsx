import React from "react";
import { useUserQuery } from "../../generated/graphql";
import styles from "../../styles/Layout.module.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { data, error } = useUserQuery({
    variables: {
      _id: "421f6412-edf9-4ef8-b131-8e957901ce2a",
    },
  });

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
    </div>
  );
};
export default Header;
