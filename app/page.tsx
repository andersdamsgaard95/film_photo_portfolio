//  HOME PAGE

import styles from "./styles/homePage.module.scss";
import getData from './utils/getData';
import Hero from './components/hero/Hero';
import GalleryDisplay from "./components/galleryDisplay/GalleryDisplay";
import Button from './components/button/Button';
import { Suspense } from "react";
import React from "react";


async function FeaturedImages() {
  // Getting the return from imported getData component
  const images = await getData();
  
  // filter the images so only featured stays
  const featuredImages = images.filter((image:any) => 
    image.featured === 'true').sort((a:any, b:any) => 
    a.sortOrder - b.sortOrder
  );

  return <GalleryDisplay filteredImages={featuredImages} />
}

export default function Home() {

  return (
    <div>
      <Hero
        imgURL="./static_images/hero.jpg"
        smallScreenImgURL='./static_images/hero_small_screen.jpg'
        imgAlt="black and white film photo of Freja reading a book"
        heading="Analog photography"
        heading2="capturen by Anders Damsgaard"
        hasButton={true}
        buttonHref='/gallery'
        buttonText="Gallery"
        buttonBackgroundColor='transparrent'
        buttonColor='white'
      />
      <section className={styles.featuredPhotos}>
        <h2>Featured Photos</h2>
        <Suspense fallback={<div>Loading featured images</div>}>
          <FeaturedImages />
        </Suspense>
        <Button 
          href='/gallery'
          text='See all'
          backgroundColor="transparrent"
          color="black"
        />
      </section>
    </div>
  );
}
