import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul  className={styles.navbarList}>
                    <li className={styles.nabarItem}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>

                    <li className={styles.nabarItem}>
                        <Link href='/about'>
                            About
                        </Link>
                    </li>

                    <li className={styles.nabarItem}>
                        <Link href='/movies'>
                            Movies
                        </Link>
                    </li>

                    <li className={styles.nabarItem}>
                        <Link href='/contactus'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;