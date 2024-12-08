'use client'
import { useState } from 'react';
import styles from './styles/GalleryFilter.module.scss';
import GalleryDisplay from '../galleryDisplay/GalleryDisplay';

type GalleryFilterProps = {
    imagesData: any[]
}

export default function GalleryFilter ({ imagesData }: GalleryFilterProps) {

    const [filteredBy, setFilteredBy] = useState<string>('all photos')

    const images = imagesData;

    function handlefilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilteredBy(e.target.value);
    }

    const filteredImages = images.filter((image) =>
        filteredBy === 'all photos' ? true : image.tags.includes(filteredBy)
    )

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
                </select>
            </div>
            <div className={styles.galleryDisplayContainer}>
                <GalleryDisplay filteredImages={filteredImages}/>
            </div>
        </section>
    )
}