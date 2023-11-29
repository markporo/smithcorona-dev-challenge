import React from 'react';
import Header from '@components/Header';
import Btn from '@components/Btn';
import Carousel from './Carousel';
import {btn, subtext, bottom} from '../styles/bottom.module.scss';


export default function Bottom() {
  return (
    <div className={bottom}>
      <Header title='PRINTED LABEL INSPIRATION' />
      <p className={subtext}>In need of some inspiration? See how some of our customers are using their inkjet labels!</p>
      <Carousel />
      <Btn class={btn} text='VIEW ALL'/>
    </div>
  )
}
