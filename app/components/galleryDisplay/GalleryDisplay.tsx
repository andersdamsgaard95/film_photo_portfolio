'use client';

import PhotoPopUp from '../PhotoPopUp/PhotoPopUp';
import styles from './styles/GalleryDisplay.module.scss';
import { useState } from 'react';

type GalleryDisplayProps = {
    filteredImages: any[],
    possibleToLike?: boolean,
    likePhoto?: (index:number) => void,
    unlikePhoto?: (index:number) => void
}

export default function GalleryDisplay({ filteredImages, possibleToLike, likePhoto, unlikePhoto }: GalleryDisplayProps) {

    const [clickedPhotoIndex, setClickedPhotoIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
 
    // Function to show photo pop-up with details
    function showPhoto(clickedPhotoIndex:number) {
        setClickedPhotoIndex(clickedPhotoIndex);
    }

    function closePopUp() {
        setClickedPhotoIndex(null);
    }

    function showLikeButton(hoverIndex:number) {
        setHoverIndex(hoverIndex);
    }

    function hideLikeButton() {
        setHoverIndex(null);
    }

    return (
        <div className={styles.galleryContainer}>
            {
                filteredImages.map((image, index) => (
                    <div 
                        key={index}
                        className={styles.imageContainer}
                        onMouseEnter={() => showLikeButton(index)}
                        onMouseLeave={hideLikeButton}
                    >
                            <img src={image.url} alt={image.description} onClick={() => showPhoto(index)} />
                            {
                                possibleToLike && likePhoto && unlikePhoto && hoverIndex === index && 
                                    <button 
                                        className={`${styles.likeButton} ${image.starred === true ? styles.likedButton : ''}`}
                                        onClick={image.starred === true ? () => unlikePhoto(index) : () => likePhoto(index)} >
                                            {image.starred === true ? 'Favored ✓' : 'Add to favorites'}
                                    </button> 
                            }
                    </div>
                ))
            }

            {/* Photo pop-up onClick */}
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