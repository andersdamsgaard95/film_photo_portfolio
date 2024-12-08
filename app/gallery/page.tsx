// Gallery page

import styles from './styles/gallery.module.scss';
import getData from "@/app/utils/getData";
import GalleryFilter from "../components/galleryFilter/GalleryFilter";
import GalleryDisplay from "../components/galleryDisplay/GalleryDisplay";

export default async function Gallery () {

    const imagesData = await getData()

    return (
        <section>
            <GalleryFilter imagesData={imagesData} />
        </section>
    )

}