import React from "react";
import { Virtual } from 'swiper/modules';
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

const getSrcImage = (path = []) => {
  let src = path.split('/')
  src = src[src.length - 1]
  return src
}
let imgRiquare = require.context('./Slides', true)
const imageList = imgRiquare.keys();
console.log(imageList[0])

  return (
    <Swiper 
    modules={[Virtual]}
    spaceBetween={50}
    slidesPerView={1}
    virtual>
      {listDrinks.map((item, index) => (
        <SwiperSlide key={item.idDrink} virtualIndex={index}>
          {<CardCocktail
            src={imageList[6]}
            title={item.strDrink}
            text={item.strInstructionsIT}
          />}
          </SwiperSlide>
      ))}
    </Swiper>
  );
};