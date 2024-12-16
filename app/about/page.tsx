// About page
import styles from './styles/about.module.scss';
import Hero from "../components/hero/Hero";

export default function AboutPage() {

    const aboutPageContent = {
        images: {
            hero: {
                url: './static_images/about_hero.jpeg',
                alt: 'Anders looking cool'
            },
            pagePicture1: {
                url: './static_images/anders_with_surfboard.JPG',
                alt: 'Anders with surfboard looking super cool'
            },
            pagePicture2: {
                url: './static_images/anders_with_helmet.JPG',
                alt: 'Anders looking like a sweet badass with a scooter helmet'
            }   
        },
        heroText: {
            h1: 'Hi, I’m Anders',
            p: 'I really enjoy the simplicity and truthiness of a raw unedited film photo. I’ve always agreed with the famous saying “keep it real”. I’m a big fan of an imperfect, no-nonsense, super random, shitty photography.'
        },
        pageText: {
            section1: {
                heading: 'Technique',
                text: 'If I shoot a photo with perfect lines, it’s mostly by coincidence. I basically have no idea what I’m doing. I taught myself just enough about how to manually adjust shutter speed and aperture, but still trying to figure all that stuff out. Shooting film is a simple hobby of mine. The idea about taking a step away from technology and taking things back to their roots is what drives me. To be honest I hate what modern amateur photography has turned into with smartphones taking over the world and ruining the wellbeing and creativity of everyone.'
            },
            section2: {
                heading: 'Frames',
                text: 'I try to catch great memories and give myself a chance to smile and giggle every time I look through my photos. I know little about aesthetics, but I tell myself that I have a great sense of when to pull out the old camera and take a snap of whatever is going on. It’s all about good times and good memories.'
            }
        }
    }

    return (
        <div>
            <Hero 
                imgURL={aboutPageContent.images.hero.url}
                imgAlt={aboutPageContent.images.hero.alt}
                heading={aboutPageContent.heroText.h1}
                heading2={aboutPageContent.heroText.p}
                headingHasBackground={true}
            />
            <div className={styles.aboutPage}>
                <section className={`${styles.section1} ${styles.aboutSectionStyle}`}>
                    <div className={styles.textChunk}>
                        <h2>{aboutPageContent.pageText.section1.heading}</h2>
                        <p>{aboutPageContent.pageText.section1.text}</p>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={aboutPageContent.images.pagePicture2.url} alt={aboutPageContent.images.pagePicture1.alt} />
                    </div>
                </section>
                <section className={`${styles.section2} ${styles.aboutSectionStyle}`}>
                    <div className={styles.imgContainer}>
                        <img src={aboutPageContent.images.pagePicture1.url} alt={aboutPageContent.images.pagePicture2.alt} />
                    </div>
                    <div className={styles.textChunk}>
                        <h2>{aboutPageContent.pageText.section2.heading}</h2>
                        <p>{aboutPageContent.pageText.section2.text}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

