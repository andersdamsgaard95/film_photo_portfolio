//  Hero component
'use client';

import styles from './styles/Hero.module.scss';
import { useEffect, useState } from 'react';
import Button from "../button/Button";

type HeroProps = {
    imgURL: string,
    smallScreenImgURL?: string,
    imgAlt: string,
    heading: string,
    heading2: string,
    headingHasBackground?: boolean,
    hasButton?: boolean,
    buttonText?: string,
    buttonHref?: string,
    buttonBackgroundColor?: string,
    buttonColor?: string
}

export default function Hero({ imgURL, smallScreenImgURL, imgAlt, heading, heading2, headingHasBackground, hasButton, buttonText, buttonHref, buttonBackgroundColor, buttonColor }: HeroProps) {

  const [heroImg, setHeroImg] = useState<string>(imgURL); 
  
  useEffect(() => {
    function updateHeroImg() {
      if (smallScreenImgURL && window.innerWidth <= 550) {
        setHeroImg(smallScreenImgURL);
      } else {
        setHeroImg(imgURL);
      }
    }

    updateHeroImg();

    window.addEventListener('resize', updateHeroImg);

    return () => {
      window.removeEventListener('resize', updateHeroImg);
    }
  }, []);
  
  return (
        <section className={styles.hero}>
          <img src={heroImg} className={heroImg === smallScreenImgURL ? styles.smallScreenHero : ''} alt={imgAlt} />
          <div className={`${styles.heroHeading} ${(headingHasBackground || heroImg === smallScreenImgURL) && styles.heroHeadingWithBackground}`}>
            <div className={styles.text}>
              <h1>{heading}</h1>
              <p>{heading2}</p>
            </div>
            {
              hasButton && buttonText && buttonHref && buttonBackgroundColor && buttonColor && (
                <Button
                  href={buttonHref}
                  text={buttonText}
                  backgroundColor={buttonBackgroundColor}
                  color={buttonColor} 
              />
              )
            }
          </div>
        </section>
      );
}