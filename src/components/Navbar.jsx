import React from 'react'
import { Link } from "react-router-dom";
import { routes } from '../utils/routes';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            {/* Aqui deberan agregar los Links */}
            <Link to={routes.home}>
                <h4>Home</h4>
            </Link>
            <Link to={routes.contacto}>
                <h4>Contact</h4>
            </Link>
            <Link to={routes.beer}>
                <h4>Beers</h4>
            </Link>
        </div>
    )
}

export default Navbar
