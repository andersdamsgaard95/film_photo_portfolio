import styles from './styles/Footer.module.scss';

export default function Footer() {

    const footerContent = {
        contactInfo: ['+45 93964789', 'flamingdragon1995@gmail.com'],
        links: [
            {
                title: 'Web development portfolio',
                url: 'https://mothasmilk.com/andersdamsgaard/'
            }
        ],
        allRightsReservedStatement: '© 2024. All rights reserved.'
    }
    
    return (
        <div className={styles.footer}>
            <div className={styles.contactFooter}>
                <div className={styles.contactContainer}>
                    <h2>Contact</h2>
                    <ul>
                        {
                            footerContent.contactInfo.map((contactInfo, index) => 
                                <li key={index}>{contactInfo}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.LinksFooter}>
                <div className={styles.linksContainer}>
                    <h2>Links</h2>
                    <ul>
                        {
                            footerContent.links.map((link, index) => 
                                <li key={index}>
                                    <h3>{link.title}:</h3>
                                    <a href={link.url} target='_blank'>mothasmilk.com/andersdamsgaard</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.rightsReservedFooter}>
                <p>{footerContent.allRightsReservedStatement}</p>
            </div>
        </div>
    )
}