//  Hero component

import styles from './styles/Hero.module.scss';
import Button from "../button/Button";

type HeroProps = {
    imgURL: string,
    imgAlt: string,
    heading: string,
    heading2?: string,
    buttonText: string,
    buttonHref: string,
    buttonBackgroundColor: string,
    buttonColor: string
}

export default function Hero({ imgURL, imgAlt, heading, heading2, buttonText, buttonHref, buttonBackgroundColor, buttonColor }: HeroProps) {

    return (
        <section className={styles.hero}>
          <img src={imgURL} alt={imgAlt} />
          <div className={styles.heroHeading}>
            <h1>
              <span>{heading}</span>
              { heading2 && <span>{heading2}</span> }
            </h1>
            <Button
              href={buttonHref}
              text={buttonText}
              backgroundColor={buttonBackgroundColor}
              color={buttonColor} 
            />
          </div>
        </section>
      );
}