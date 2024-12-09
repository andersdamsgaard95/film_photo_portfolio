'use client';

import PhotoPopUp from '../PhotoPopUp/PhotoPopUp';
import styles from './styles/GalleryDisplay.module.scss';
import { useState } from 'react';

type GalleryDisplayProps = {
    filteredImages: any[];
}

export default function GalleryDisplay({ filteredImages }: GalleryDisplayProps) {

    const [clickedPhotoIndex, setClickedPhotoIndex] = useState<number | null>(null);

    // Function to show photo pop-up with details
    function showPhoto(clickedPhotoIndex:number) {
        setClickedPhotoIndex(clickedPhotoIndex);
    }
    function closePopUp() {
        setClickedPhotoIndex(null);
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
                clickedPhotoIndex !== null && (
                    <PhotoPopUp 
                        image={filteredImages[clickedPhotoIndex]}
                        closePopUp={closePopUp}
                    />
                )
            }
        </div>
    )
}