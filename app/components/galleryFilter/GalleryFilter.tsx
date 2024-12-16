'use client';
import { useState, useEffect } from 'react';
import styles from './styles/GalleryFilter.module.scss';
import GalleryDisplay from '../galleryDisplay/GalleryDisplay';

type GalleryFilterProps = {
    imagesData: any[]
}

export default function GalleryFilter ({ imagesData }: GalleryFilterProps) {

    //  State variables
    const [images, setImages] = useState<any[]>(imagesData);
    const [filteredImages, setFilteredImages] = useState<any[]>(imagesData);
    const [filteredBy, setFilteredBy] = useState<string>('all photos');
    const [isHydrated, setIsHydrated] = useState<boolean>(false);

    useEffect(() => {
        if (!isHydrated) {
            const savedImageList = localStorage.getItem('galleryImages');
            if (savedImageList) {
                const parsedImages = JSON.parse(savedImageList);
                setImages(parsedImages);
                setFilteredImages(parsedImages);
            }
            setIsHydrated(true);
        }
    }, [isHydrated]);

    //  Save image list to localStorage whenever they change
    useEffect(() => {
        if (isHydrated) {
           localStorage.setItem('galleryImages', JSON.stringify(images)); 
        }
    }, [images, isHydrated]);

    function handlefilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilteredBy(e.target.value);
    }

    //  Update filtered list from original list everytime filter criteria or original list changes
    useEffect(() => {
        setFilteredImages(() => 
            images.filter((image) =>
                filteredBy === 'all photos' ? true :
                filteredBy === 'favorites' ? image.starred === true : 
                image.tags.includes(filteredBy)
            )
        )
    }, [filteredBy, images])

    function likePhoto(photoToLike:number) {
        const actualIndex = images.findIndex((image) => image.public_id === filteredImages[photoToLike].public_id);

        setImages((prev) => 
            prev.map((image, index) => 
                index === actualIndex ? {...image, starred: true} : image 
            )
        )
    }
    function unlikePhoto(photoToUnlike:number) {
        const actualIndex = images.findIndex((image) => image.public_id === filteredImages[photoToUnlike].public_id);

        setImages((prev) => 
            prev.map((image, index) => 
                index === actualIndex ? {...image, starred: false} : image 
            )
        ) 
    }
    //localStorage.removeItem('galleryImages');

    return (
        <section className={styles.galleryPage}>
            <div className={styles.headingAndFilter}>
                <div className={styles.stickyContainer}>
                    <h1>Gallery</h1>
                    <select 
                        name="image filter" 
                        id="imageFilter"
                        value={filteredBy}
                        onChange={handlefilterChange}
                    >
                            <option value="all photos">all photos</option>
                            <option value="nature">nature</option>
                            <option value="travel">travel</option>
                            <option value="surf">surf</option>
                            <option value="city">city</option>
                            <option value="portrait">portrait</option>
                            <option value="Renault Express">Renault Express</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Thailand">Thailand</option>
                            <option value="black/white">black/white</option>
                            <option value="favorites">favorites</option>
                    </select>
                </div>
            </div>
            <div className={styles.galleryDisplayContainer}>
                <GalleryDisplay 
                    filteredImages={filteredImages}
                    possibleToLike={true}
                    likePhoto={likePhoto}
                    unlikePhoto={unlikePhoto} 
                />
            </div>
        </section>
    )
}