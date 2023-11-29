// import { useState } from "react";
import Image from "next/image";
import styles from "../styles/carousel.module.scss";
import leftChevron from '../public/images/left-chevron.png'
import rightChevron from '../public/images/right-chevron.png'

export default function Carousel() {

  const Items = [
    {
      "id": 1,
      "alt": "Photography",
      "imageUrl": "/images/purple-label.png"
    },
    {
      "id": 2,
      "alt": "City Views",
      "imageUrl": "/images/white-label.png"
    },
    {
      "id": 3,
      "alt": "Wild Life",
      "imageUrl": "/images/black-label.png"
    }

  ]


  return (
    <div className={styles.container}>

      <Image
        className={styles['left-chevron']}
        src={leftChevron}
        alt='<'
        width='25'
        height='25'
        loading='lazy'
      />

      <div className={styles.carousel}>
        {Items.map((item) => (
          <Image
            key={item.id}
            className={styles.images}
            src={item.imageUrl}
            alt={item.alt}
            width='350'
            height='350' 
            loading='lazy'
            />
        ))}
      </div>
      <Image
        className={styles['right-chevron']}
        src={rightChevron}
        alt='>'
        width='25'
        height='25'
        loading='lazy'
      />
    </div>
  );
}