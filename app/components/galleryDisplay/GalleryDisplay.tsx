'use client';

import styles from './styles/GalleryDisplay.module.scss';
import { useState } from 'react';

type GalleryDisplayProps = {
    filteredImages: any[];
}

export default function GalleryDisplay({ filteredImages }: GalleryDisplayProps) {

    const [photoIsClicked, setPhotoIsClicked] = useState<boolean>(false);
    const [clickedPhotoIndex, setClickedPhotoIndex] = useState<number | null>(null);

    // Function to show photo pop-up with details
    function showPhoto(clickedPhotoIndex:number) {
        setPhotoIsClicked(true);
        setClickedPhotoIndex(clickedPhotoIndex);
    }

    return (
        <div className={styles.galleryContainer}>
            {
                filteredImages.map((image, index) => (
                    <div 
                        key={index}
                        className={styles.imageContainer}
                        onClick={() => showPhoto(index)}
                    >
                            <img src={image.url} alt={image.description} />
                    </div>
                ))
            }

            {/* Photo pop-up onClick MAKE ITS OWN COMPONENT*/}
            {
                photoIsClicked && clickedPhotoIndex !== null &&
                    (
                        <div className={styles.photoPopUpBackground}>
                            <div className={styles.photoPopUp}>
                                <img src={filteredImages[clickedPhotoIndex].src} alt={filteredImages[clickedPhotoIndex].description} />
                            </div>
                        </div>
                    )
            }
        </div>
    )
}