import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from '@mui/icons-material/LockOpen';

import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";
import NavItem, { NavItemInputs } from "./NavItem";
import { useRouter } from "next/router";
import BasicModal from "../Modal";
import { useAuth } from "../../hooks/useAuth";

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
  const [open, setOpen] = useState(false);
  const { authenticated } = useAuth();
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
        <BasicModal open={open} setOpen={setOpen} />
        {authenticated ? <LockOpenIcon /> : <LockIcon className="pointer" onClick={() => setOpen(true)} />}
      </div>
    </div>
  );
};
export default Navbar;
