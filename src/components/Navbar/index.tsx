import React, { useState } from "react";

import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";

interface NavbarProps {}

const navItems = ["Home", "Projects", "Experience", "Contact"];

const Navbar: React.FC<NavbarProps> = () => {
    const [selected, setSelected] = useState(navItems[0]);
    return (
        <div className={styles.root}>
            {navItems.map((item) => (
                <div
                    className={classNames({
                        pointer: true,
                        [styles.nav_item]: true,
                        [styles.__selected]: item === selected,
                    })}
                    onClick={() => setSelected(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
export default Navbar;
