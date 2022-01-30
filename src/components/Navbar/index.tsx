import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Icon } from "@mui/material";

import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";

const navItems = [
    {
        text: "Home",
        icon: <HomeIcon />
    },
    {
        text: "Projects",
        icon: <CodeIcon />
    },
    {
        text: "Experience",
        icon: <WorkOutlineIcon />
    },
    {
        text: "Blog",
        icon: <ArticleIcon />
    },
    {
        text: "Contact",
        icon: <AlternateEmailIcon />
    },
];

const Navbar: React.FC<{}> = () => {
    const [selected, setSelected] = useState(navItems[0].text);
    return (
        <div className={styles.root}>
            {navItems.map((item) => (
                <div
                    className={classNames({
                        pointer: true,
                        [styles.nav_item]: true,
                        [styles._selected]: item.text === selected
                    })}
                    onClick={() => setSelected(item.text)}
                >
                    {item.icon && <Icon className={styles.icon}>{item.icon}</Icon>}
                    {item.text}
                </div>
            ))}
        </div>
    );
};
export default Navbar;
