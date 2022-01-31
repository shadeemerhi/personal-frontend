import React from "react";
import styles from "../../styles/Navbar.module.scss";
import classNames from "classnames";
import Icon from "@mui/material/Icon";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export type NavItemInputs = {
    text: string;
    route: string;
    icon: any;
};

interface NavItemProps {
    item: NavItemInputs;
    isSelected: boolean;
    setSelected: (value: string) => void;
    width: number;
}

const NavItem: React.FC<NavItemProps> = ({ item, width, isSelected, setSelected }) => {
    const router = useRouter();
    return (
        <Box
            className={classNames({
                pointer: true,
                [styles.nav_item]: true,
                [styles._selected]: isSelected,
            })}
            onClick={() => {
                setSelected(item.text);
                router.push(item.route);
            }}
            width={{ xs: `${width}%`, sm: '100%' }}
        >
            <item.icon className={styles.icon} />
            <p className={`mg_0 ${styles.text}`}>{item.text}</p>
        </Box>
    );
};
export default NavItem;
