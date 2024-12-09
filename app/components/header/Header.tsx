'use client'
import styles from './styles/Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

    const pathname = usePathname();

    return (
        <nav 
            className={styles.header}
            style={{
                backgroundColor: pathname === '/about' ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                color: pathname === '/gallery' ? 'black' : 'white'
            }}
        >
                <Link href='/'>
                    <img className={styles.logo} src={pathname === '/gallery' ? "./icons/home_icon_black.svg": "./icons/home_icon_white.svg"} alt="" />
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