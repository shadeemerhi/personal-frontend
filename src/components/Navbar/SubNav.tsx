import React, { useState } from "react";

import classNames from "classnames";
import styles from "../../styles/SubNav.module.scss";

type SubNavProps = {
  items: string[];
  selected: string;
  setItem: (value: string) => void;
};

const SubNav: React.FC<SubNavProps> = ({ items, selected, setItem }) => {
  return (
    <div className={styles.sub_nav}>
      {items.map((item, index) => (
        <span
          key={index}
          className={classNames({
            [styles.nav_item]: true,
            pointer: true,
            [styles._selected]: item === selected,
          })}
          onClick={() => setItem(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default SubNav;
