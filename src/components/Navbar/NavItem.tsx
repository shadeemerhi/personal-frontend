import React from "react";
import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";
import Icon from "@mui/material/Icon";
import { useRouter } from "next/router";

export type NavItemInputs = {
    text: string;
    route: string;
    icon: any;
};

interface NavItemProps {
    item: NavItemInputs;
    isSelected: boolean;
    setSelected: (value: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isSelected, setSelected }) => {
    const router = useRouter();
    return (
        <div
            className={classNames({
                pointer: true,
                [styles.nav_item]: true,
                [styles._selected]: isSelected,
            })}
            onClick={() => {
                setSelected(item.text);
                router.push(item.route);
            }}
        >
            {item.icon && <Icon className={styles.icon}>{item.icon}</Icon>}
            {item.text}
        </div>
    );
};
export default NavItem;
