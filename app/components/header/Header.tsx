'use client'
import styles from './styles/Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

    const pathname = usePathname();

    return (
        <nav className={`${styles.header} ${pathname !== '/' && pathname !== '/about' && styles.backgroundHeader}`}>
            <Link href='/'>
                <img className={styles.logo} src="./icons/home_icon.svg" alt="" />
            </Link>
            <Link href='/photographies' className={styles.navLink}>
                Photographies   
            </Link>
            <Link href='/about' className={styles.navLink}>
                About
            </Link>
        </nav>
    )
}