import React from 'react';
import Image from 'next/image';
import styles from '../styles/middle.module.scss';
import Header from './Header';
import printer from '../public/images/printer-icon.png';

let printerSpecsLeft = [
  {Spec: 'PRINTER TECHNOLOGY', Value: 'Inkjet'},
  {Spec: 'COLOR', Value: 'White'},
  {Spec: 'WIDTH', Value: '4"'},
  {Spec: 'LENGTH', Value: '2"'},
  {Spec: 'PERFORATED', Value: 'YES'},
  {Spec: 'LABELS PER ROLL', Value: '1245'},
  {Spec: 'ROLLS PER BOX', Value: '4', noBorderBottom: true}
]

let printerSpecsRight = [
  {Spec: 'LABELS PER BOX', Value: '4980'},
  {Spec: 'OUTER DIAMETER', Value: '6"'},
  {Spec: 'CORE DIAMETER', Value: '3"'},
  {Spec: 'PART NUMBER', Value: 'RIJ4020AP'},
  {Spec: 'PERFORATED', Value: 'YES'},
  {Spec: 'MATERIAL', Value: 'Paper'},
  {Spec: 'FINISH', Value: 'Gloss', noBorderBottom: true}
]
  

export default function Middle() {
  return (
    <div className={styles['middle-section']}>
      <div className={styles['inner-middle-container']}>
        <div className={styles['middle-title']}>
          <Header title='FULL SPECIFICATIONS' />
          <div className={styles['printer-icon-title']}>
            <Image
              alt='printer icon'
              src={printer}
              className={styles['printer-icon']}
              width={30}
              height={30}
              sizes='30px'
            />
            <h2 className={styles['printer-header']} >PRINT SPEC SHEET</h2>
          </div>
        </div>
        <div className={styles['middle-content']}>
          <div className={styles['middle-left']}>
            {printerSpecsLeft.map((eachSpec) => (
              <div className={eachSpec.noBorderBottom ? styles['no-border-bottom'] : styles['border-bottom']}>
             <h2>{eachSpec.Spec}</h2>
             <p>{eachSpec.Value}</p>
             </ div>
            ))}
          </div>
          <div className={styles['middle-right']}>
          {printerSpecsRight.map((eachSpec) => (
              <div className={eachSpec.noBorderBottom ? styles['no-border-bottom'] : styles['border-bottom']}>
             <h2>{eachSpec.Spec}</h2>
             <p>{eachSpec.Value}</p>
             </ div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
