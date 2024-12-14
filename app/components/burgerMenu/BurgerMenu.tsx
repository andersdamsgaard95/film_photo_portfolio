'use client';
import styles from './styles/BurgerMenu.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BurgerMenu() {

    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);

    const pathname = usePathname();

    function openBurgerMenu() {
        setBurgerIsOpen(!burgerIsOpen);
    }

    useEffect(() => {
        function closeBurger() {
            setBurgerIsOpen(false);
        }
        window.addEventListener('scroll', closeBurger);

        return () => window.removeEventListener('scroll', closeBurger);
    }, []);

    useEffect(() => {
        setBurgerIsOpen(false);
    },[pathname])

    return (
        <div className={styles.burgerMenu}>
            <img 
                src={pathname === '/gallery' ? './icons/burger_menu_black.png' : './icons/burger_menu_white.png'} 
                alt="Burger menu"
                onClick={openBurgerMenu} 
            />
            {
                burgerIsOpen && (
                    <div className={styles.openBurgerContainer}>
                        <div className={`${styles.openBurger} ${pathname === '/gallery' ? styles.blackBurger : ''}`}>
                            <Link href='/' className={styles.navLink}>Home</Link>
                            <Link href='/gallery' className={styles.navLink}>Photos</Link>
                            <Link href='/about' className={styles.navLink}>About</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}