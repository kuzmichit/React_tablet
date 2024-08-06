import React from "react";
import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

import drinks from './Drinks.json'
import CardCocktail from './Card.jsx';
import images from './Slides'

export default () => {
  // Create array with 1000 slides
  const listDrinks = drinks.drinks;
  const list = new Set();
  listDrinks.forEach(i => {
    
    list.add(i);
    
    } );
    console.log(list.keys())

const getSrcImage = (path = []) => {
  let src = path.split('/')
  src = src[src.length - 1]
  return src
}
let images = require.context('./Slides', true)
const imageList = images.keys().map(image => (
  { image: images(image) } ) );
console.log(imageList[1])

  return (
    <Swiper 
      modules={[Virtual, Navigation]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    spaceBetween={50}
    slidesPerView={1}
    virtual>
      {listDrinks.map((item, index) => (
        <SwiperSlide key={item.idDrink} virtualIndex={index} style={{ border: 'none !important' }} >
          {<CardCocktail
            src={imageList[index]}
            title={item.strDrink}
            text={item.strInstructionsIT}
          />}
          </SwiperSlide>
      ))}
    </Swiper>
  );
};