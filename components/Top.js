import React from 'react';
import Header from '@components/Header';
import Image from 'next/image';
import apricot from '../public/images/apricot-jam.png';
import { container, jam, inner } from '../styles/top.module.scss';

export default function Top() {
    return (
        <div className={container}>
            <div className={inner}>
            <Image
                src={apricot}
                className={jam}
                sizes='(max-width: 768) 100px, (max-width: 1200px) 300px, 500px'
                width={500}
                height={889}
                loading="lazy"
                alt="Jar of Apricot Jam"
            />
            <Header title="PRODUCT OVERVIEW" />
            <p>
                Inkjet printing technology uses minuscule, liquid ink droplets that
                are propelled onto paper or other substrates during the printing
                process, where they rapidly dry to produce high-quality, high-
                resolution colorful text and images.
            </p>

            <p>
                Dye-based inks are less expensive. They are able ta produce more
                vibrant colors when printing as the ink is absorbed into the fiber of
                the material. Dye-based ink is ideal for printing customer facing
                product labels that require colorful text or images Pigment-based
                Inks are more resilient when printing. The Ink sits on the surface of
                the materials is it printed on and fuses with the fibers. Pigment-
                based ink is ideal for printing durable labels, such as GHS and BS.
                5609 compliant labels.
            </p>

            <p>
                Inkjet printing supports roll and fanfold labels, as well as tags. Roll
                labels must have a 3" core inner diameter. Perforated or non
                perforated labels can be used as well as continuous labels. Many
                inkjet printers support labels with glossy or matte finishes for
                applications that require different vibrancy or reflectivity levels. We
                carry various label sizes In different materials and colors to ensure
                you are choosing the best label for your application.
            </p>
            </div>
        </div>
    )
}
