'use client'
import styles from './styles/Header.module.scss';
import Link from 'next/link';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {

    const [burgerIsShown, setBurgerIsShown] = useState<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        function showBurgerMenu() {
            if (window.innerWidth <= 700) {
                setBurgerIsShown(true); 
            } else {
                setBurgerIsShown(false);
            }
        }
        showBurgerMenu();

        window.addEventListener('resize', showBurgerMenu);

        return () => window.removeEventListener('resize', showBurgerMenu);

    },[]);

    return (
        <nav 
            className={styles.header}
            style={{
                backgroundColor: pathname === '/about' ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
            }}
        >
            {
                burgerIsShown ? <BurgerMenu />
                :
                <div 
                    className={styles.globalNav}
                    style={{color: pathname === '/gallery' ? 'black' : 'white'}}
                >
                        <Link href='/'>
                            <img className={styles.logo} src={pathname === '/gallery' ? "./icons/home_icon_black.svg": "./icons/home_icon_white.svg"} alt="" />
                        </Link>
                        <Link href='/gallery' className={`${styles.navLink} ${pathname === '/gallery' ? styles.active : ''}`}>
                            Photos   
                        </Link>
                        <Link href='/about' className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
                            About
                        </Link>
                </div>
            }
        </nav>
    )
}