import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";

import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";
import NavItem, { NavItemInputs } from "./NavItem";
import { useRouter } from "next/router";

const navItems = [
  {
    text: "Home",
    route: "/",
    icon: HomeIcon,
  },
  {
    text: "Projects",
    route: "/projects",
    icon: CodeIcon,
  },
  {
    text: "Experience",
    route: "/experience",
    icon: WorkOutlineIcon,
  },
  {
    text: "Blog",
    route: "/blog",
    icon: ArticleIcon,
  },
  {
    text: "Contact",
    route: "/contact",
    icon: AlternateEmailIcon,
  },
];

const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const initSelected =
    navItems.find((item) => item.route === router.pathname)?.text || "";

  const [selected, setSelected] = useState(initSelected);
  return (
    <div className={styles.root}>
      <div className={styles.items_container}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            isSelected={item.text === selected}
            setSelected={setSelected}
            width={Math.round((1 / navItems.length) * 100)}
          />
        ))}
      </div>
      <div className={styles.lock_icon_container}>
        <LockIcon className={`${styles.icon} pointer`} />
      </div>
    </div>
  );
};
export default Navbar;
