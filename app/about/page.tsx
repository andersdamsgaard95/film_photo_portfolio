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
            h1: 'Hi! I’m Anders, and I like film fotography',
            p: 'lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb. chsubcijas hjsx.'
        },
        pageText: {
            section1: {
                heading: 'Heading 1',
                text: 'lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb . chsubcijas hjsx. lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb. chsubcijas hjsx. lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb. chsubcijas hjsx.'
            },
            section2: {
                heading: 'Heading 2',
                text: 'lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb . chsubcijas hjsx. lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb. chsubcijas hjsx. lorem 50 wdeiusnxjasnxjknwjascbxhjas zxkm asjnzbxhjasnxjksajhx hjsakj ajkx sa asxnas xasibxaskjx jsaxnjas xasnksankxsanxjkzcnskdzx . sakcnsan ch snmcijasb sacbiusb. chsubcijas hjsx.'
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
                    <div className={styles.imgContainer}>
                        <img src={aboutPageContent.images.pagePicture1.url} alt={aboutPageContent.images.pagePicture1.alt} />
                    </div>
                    <div className={styles.textChunk}>
                        <h2>{aboutPageContent.pageText.section1.heading}</h2>
                        <p>{aboutPageContent.pageText.section1.text}</p>
                    </div>
                </section>
                <section className={`${styles.section2} ${styles.aboutSectionStyle}`}>
                    <div className={styles.textChunk}>
                        <h2>{aboutPageContent.pageText.section2.heading}</h2>
                        <p>{aboutPageContent.pageText.section2.text}</p>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={aboutPageContent.images.pagePicture2.url} alt={aboutPageContent.images.pagePicture2.alt} />
                    </div>
                </section>
            </div>
        </div>
    )
}

