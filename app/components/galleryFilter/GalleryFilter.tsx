'use client'
import { useState, useEffect } from 'react';
import styles from './styles/GalleryFilter.module.scss';
import GalleryDisplay from '../galleryDisplay/GalleryDisplay';

type GalleryFilterProps = {
    imagesData: any[]
}

export default function GalleryFilter ({ imagesData }: GalleryFilterProps) {

    //  Get images from localStorage on initial mount
    const initialImageList = () => {
        const savedImageList = localStorage.getItem('galleryImages');
        return savedImageList ? JSON.parse(savedImageList) : imagesData;
    }

    //  State variables
    const [images, setImages] = useState<any[]>(initialImageList());
    const [filteredBy, setFilteredBy] = useState<string>('all photos');
    const [filteredImages, setFilteredImages] = useState<any[]>(initialImageList());

    //  Save image list to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('galleryImages', JSON.stringify(images));
    }, [images]);

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

    return (
        <section className={styles.galleryPage}>
            <div className={styles.headingAndFilter}>
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
                        <option value="favorites">favorites</option>
                </select>
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