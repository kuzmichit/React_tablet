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

  const listDrinks = drinks.list;
  const list = new Set();

  listDrinks.forEach(i => {
    list.add(i.strCategory);
  });

  // la lista delle bibite per fare il filter
  const filter = ["Cocktail", "Ordinary Drink", "Shot", "Punch / Party Drink", "Coffee / Tea", "Beer"]

  const getSrcImage = (path = []) => {
    let src = path.split('/')
    src = './' + src[src.length - 1]
    return src
  }

  let slideImages = require.context('./Slides', true)
  const objectSlides = {};
  const imageList = slideImages.keys().forEach(image => (
    objectSlides[`${image}`] = slideImages(image)));

  console.log(slideImages);
  // imageList.forEach(item => {

  //   for (const key in item) {
  //     if (Object.hasOwnProperty.call(item, key)) {
  //       const element = item[key];

  //       console.log(element);
  //     }

  //   }
  // } )

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
            src={objectSlides[getSrcImage(item.strDrinkThumb)]}
            title={item.strDrink}
            text={item.strInstructionsIT}
          />}
          </SwiperSlide>
      ))}
    </Swiper>
  );
};