import Link from 'next/link';
import styles from './styles/Button.module.scss';

type ButtonProps = {
    href: string,
    text: string,
    backgroundColor: string,
    color: string
}

export default function Button({ href, text, backgroundColor, color }: ButtonProps) {

    return (
        <Link 
            href={href}
            className={`${styles.button} ${color === 'white' ? styles.whiteHover : styles.blackHover}`}
            style={{
                backgroundColor: backgroundColor,
                color: color,
            }}
        >
                {text}
        </Link>
    )
}