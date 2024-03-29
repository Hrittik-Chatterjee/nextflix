import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href=''>
                        <Image src='/cover.png' alt='logo' height={100} width={170}/>
                </Link>
            </div>
            <Nav></Nav>
        </header>
    );
};

export default Header;