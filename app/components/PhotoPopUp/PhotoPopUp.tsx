import styles from './styles/PhotoPopUp.module.scss';

type PhotoPopUpProps = {
    image: any,
    closePopUp: () => void
}

export default function PhotoPopUp ({ image, closePopUp }: PhotoPopUpProps) {

    return (
        <div className={styles.photoPopUpBackground}>
            <div className={styles.containerForExitButton}>
                <div className={styles.photoPopUp}>
                    <div 
                        className={`${image.view === 'portrait' ? styles.imgContainerPortrait : styles.imgContainerLandscape}`} 
                    >
                                <img src={image.url} alt={image.description} />
                    </div>
                    <div className={styles.imgInfoContainer}>
                        <p>{image.description}</p>
                        <div className={styles.seperaterLine}></div>
                        <div className={styles.imgInfoBulletPoint}>
                            <p className={styles.bulletPointHeading}>Country:</p>
                            <p>{image.country}</p>
                        </div>
                        <div className={styles.seperaterLine}></div>
                        <div className={styles.imgInfoBulletPoint}>
                            <p className={styles.bulletPointHeading}>Tags:</p>
                            <p>{image.tags.join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div 
                    className={styles.xIcon}
                    onClick={closePopUp}
                >
                        <img src="./icons/x_button.svg" alt="Exit photo pop-up" />
                </div>
            </div>
        </div>
    )
}