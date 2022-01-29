import React from 'react';

import styles from "../styles/Navbar.module.scss";

type NavbarProps = {
  
};

const Navbar:React.FC<NavbarProps> = () => {
  
  return <div className={styles.root}>Here is the navbar</div>
}
export default Navbar;