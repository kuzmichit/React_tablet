import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import './style.css'
import img from './Slides/2x8thr1504816928.jpg';
import CardCocktail from './Card.jsx';
import drinks from './Drinks.json'

export default () => {

const getSrcImage = (path = []) => {
    let src = path.split('/')
    src = src[src.length - 1]
    return src
  }
  const CreateSlides = () => {
    let count = 0;
    
    const slides = drinks.drinks.map((item, i) => {
      
    return (
        <SwiperSlide>
          <CardCocktail
            id={item.idDrink}
            src={getSrcImage(item.strDrinkThumb)}
            title={item.strDrink}
            text={item.strInstructionsIT}
          />
        </SwiperSlide>
      )
    })
    console.log(slides);
    
  }
      
  const Slides = CreateSlides();
  
  const b = `<SwiperSlide>{<CardCocktail/>}</SwiperSlide>`
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{<CardCocktail/>}</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}