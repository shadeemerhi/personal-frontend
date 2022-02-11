import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import styles from "../../styles/Navbar.module.scss";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import ModalWrapper from "../Modal";
import AuthModal from "../Modal/AuthModal";
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
  {
    text: "Admin",
    route: "/admin",
    icon: AdminPanelSettingsIcon,
  },
];

const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const initSelected =
    navItems.find((item) => item.route === router.pathname)?.text || "";

  const [selected, setSelected] = useState(initSelected);
  const [open, setOpen] = useState(false);
  const { authKey, error } = useAuth();

  return (
    <div className={styles.root}>
      <div className={styles.items_container}>
        {navItems.map((item, index) =>
          item.text === "Admin" && !authKey ? null : (
            <NavItem
              key={index}
              item={item}
              isSelected={item.text === selected}
              setSelected={setSelected}
              width={Math.round((1 / navItems.length + 1) * 100)}
            />
          )
        )}
      </div>
      <div className={styles.lock_icon_container}>
        <ModalWrapper open={open} setOpen={setOpen} error={error}>
          <AuthModal />
        </ModalWrapper>
        {authKey ? (
          <LockOpenIcon />
        ) : (
          <LockIcon className="pointer" onClick={() => setOpen(true)} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
