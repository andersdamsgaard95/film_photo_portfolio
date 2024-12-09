import styles from './styles/PhotoPopUp.module.scss';

type PhotoPopUpProps = {
    image: any,
}

export default function PhotoPopUp ({ image }: PhotoPopUpProps) {

    return (
        <div className={styles.photoPopUpBackground}>
            <div className={styles.photoPopUp}>
                <div className={styles.imgContainer}>
                    <img src={image.url} alt={image.description} />
                </div>
                <div className={styles.imgInfoContainer}>
                    <p>{image.description}</p>
                    <div className={styles.imgInfoBulletPoint}>
                        <p>Country</p>
                        <p>{image.country}</p>
                    </div>
                    <div className={styles.imgInfoBulletPoint}>
                        <p>Tags</p>
                        <p>{image.tags.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}