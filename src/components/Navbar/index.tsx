import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box, Grid, Icon } from "@mui/material";

import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";
import NavItem, { NavItemInputs } from "./NavItem";

const navItems = [
    {
        text: "Home",
        route: "/",
        icon: HomeIcon
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
    const [selected, setSelected] = useState(navItems[0].text);
    return (
        <div className={styles.root}>
            {navItems.map((item) => (
                <NavItem
                    item={item}
                    isSelected={item.text === selected}
                    setSelected={setSelected}
                    width={Math.round((1 / navItems.length) * 100)}
                />
            ))}
        </div>
    );
};
export default Navbar;
