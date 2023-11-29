import React from 'react';
import Image from 'next/image';
import styles from '../styles/middle.module.scss';
import Header from './Header';
import printer from '../public/images/printer-icon.png';

let printerSpecsLeft = [
  {id: '1', Spec: 'PRINTER TECHNOLOGY', Value: 'Inkjet'},
  {id: '2', Spec: 'COLOR', Value: 'White'},
  {id: '3', Spec: 'WIDTH', Value: '4"'},
  {id: '4', Spec: 'LENGTH', Value: '2"'},
  {id: '5', Spec: 'PERFORATED', Value: 'YES'},
  {id: '6', Spec: 'LABELS PER ROLL', Value: '1245'},
  {id: '7', Spec: 'ROLLS PER BOX', Value: '4', noBorderBottom: true}
]

let printerSpecsRight = [
  {id: '8', Spec: 'LABELS PER BOX', Value: '4980'},
  {id: '9', Spec: 'OUTER DIAMETER', Value: '6"'},
  {id: '10', Spec: 'CORE DIAMETER', Value: '3"'},
  {id: '11', Spec: 'PART NUMBER', Value: 'RIJ4020AP'},
  {id: '12', Spec: 'PERFORATED', Value: 'YES'},
  {id: '13', Spec: 'MATERIAL', Value: 'Paper'},
  {id: '14', Spec: 'FINISH', Value: 'Gloss', noBorderBottom: true}
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
              <div key={eachSpec.id} className={eachSpec.noBorderBottom ? styles['no-border-bottom'] : styles['border-bottom']}>
             <h2>{eachSpec.Spec}</h2>
             <p>{eachSpec.Value}</p>
             </ div>
            ))}
          </div>
          <div className={styles['middle-right']}>
          {printerSpecsRight.map((eachSpec) => (
              <div key={eachSpec.id} className={eachSpec.noBorderBottom ? styles['no-border-bottom'] : styles['border-bottom']}>
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
