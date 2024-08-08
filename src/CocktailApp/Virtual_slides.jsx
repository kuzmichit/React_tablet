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

  const listDrinks = drinks.drinks;
  const list = new Set();
  

const getSrcImage = (path = []) => {
  let src = path.split('/')
  src = './' + src[src.length - 1]
  return src
}
let slideImages = require.context('./Slides', true)
const imageList = slideImages.keys().map(image => (
  { [`${image}`]: slideImages(image) }));
  
  
  function clg() {
   for (var key in imageList) {
     console.log(key)
   }
 }

  return (
    <Swiper 
      modules={[Virtual, Navigation]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log('swiper')}
    spaceBetween={50}
    slidesPerView={1}
    virtual>
      {listDrinks.map((item, index) => (
        <SwiperSlide key={item.idDrink} virtualIndex={index} style={{ border: 'none !important' }} 
          onClick={clg()} >
        
          {<CardCocktail
            src={slideImages[getSrcImage(item.strDrinkThumb)]}
            title={item.strDrink}
            text={item.strInstructionsIT}
          />}
          </SwiperSlide>
      ))}
    </Swiper>
  );
};