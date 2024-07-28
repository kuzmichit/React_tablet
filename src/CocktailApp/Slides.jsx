import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import './style.css'
import img from './Slides/2x8thr1504816928.jpg';
import CardCocktail from './Card.jsx';
import drinks from './Drinks.json'

export default () => {
  
  const getSrcImage = (path=[]) => {
      let res = path.split('/')
      res[res.length - 1] 
      console.log(res)
      return res
  }
  const CreateSlides = () => {
    
   
    const createSlides = drinks.drinks.map((item, i) => {
      console.log(item.idDrink, 111)
      
      {
        <SwiperSlide>
        {<CardCocktail
        id = {item.idDrink}
        src = {getSrcImage(item.strDrinkThumb)}
        title = {item.strDrink}
        text = {item.strInstructionsIT}
        />}
        </SwiperSlide>
      }
      } )
      }
      
   const Slides = CreateSlides();
   console.log(Slides, 'slides')
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
} ;