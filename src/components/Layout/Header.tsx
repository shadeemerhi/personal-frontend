import React from "react";
import styles from "../../styles/Layout.module.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.header_image_container}>
      <img src="https://shadee-personal-website.s3.amazonaws.com/7d59338d-ef8f-4898-8ca7-de91df1713b1.png" />
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
