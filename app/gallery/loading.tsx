import styles from './styles/gallery.module.scss';

export default function GalleryLoading() {
    return (
        <div className={styles.loadingSkeleton}>
            <div className={styles.heading}>
                <p>Gallery loading</p>
            </div>
            <div className={styles.imageSkeleton}>
                <div className={styles.imageBox}></div>
                <div className={styles.imageBox}></div>
                <div className={styles.imageBox}></div>
                <div className={styles.imageBox}></div>
                <div className={styles.imageBox}></div>
                <div className={styles.imageBox}></div>
            </div>
        </div>
    )
}