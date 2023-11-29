import { useState } from "react";
import Image from "next/image";
import { Items } from "../public/carouselItems.json"
import styles from "../styles/carousel.module.scss";
import leftChevron from '../public/images/left-chevron.png'
import rightChevron from '../public/images/right-chevron.png'

export default function Carousel() {
  // const [slide, setSlide] = useState(0);

  // const nextSlide = () => {
  //   setSlide(slide === data.length - 1 ? 0 : slide + 1);
  // };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? data.length - 1 : slide - 1);
  // };

  return (
    <div className={styles.container}>

      <Image
        className={styles['left-chevron']}
        src={leftChevron}
        alt='<'
        width='30'
        height='30'
      />

      <div className={styles.carousel}>
        {Items.map((item) => (
          <Image
            key={item.id}
            className={styles.images}
            src={item.imageUrl}
            alt={item.alt}
            width='400'
            height='400' />
        ))}
      </div>
      <Image
        className={styles['right-chevron']}
        src={rightChevron}
        alt='>'
        width='30'
        height='30'
      />
    </div>
  );
}