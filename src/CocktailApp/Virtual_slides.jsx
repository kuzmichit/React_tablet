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

  // la lista delle bibite per fare il filter
  const filter = ["Cocktail", "Ordinary Drink", "Shot", "Punch / Party Drink", "Coffee / Tea", "Beer"]

  const getSrcImage = (path = []) => {
    let src = path.split('/')
    src = './' + src[src.length - 1]
    return src
  }

  let slideImages = require.context('./Slides', true)
  const objectSlides = {};
  slideImages.keys().forEach(image => (
    objectSlides[image] = slideImages(image)));

  return (
		<Swiper
			modules={[Virtual, Navigation]}
			navigation={{
				nextEl: "#btnNext",
				prevEl: "#btnPrev",
			}}
			// navigation
			onSlideChange={() => console.log("slide change---")}
			onSwiper={swiper => console.log(swiper)}
			slidesPerView={1}
			virtual
			className='height'
		>
			{listDrinks.map((item, index) => (
				<SwiperSlide
					key={item.idDrink}
					virtualIndex={index}
				>
					{
						<CardCocktail
							src={objectSlides[getSrcImage(item.strDrinkThumb)]}
							title={item.strDrink}
							text={item.strInstructionsIT}
						/>
					}
				</SwiperSlide>
			))}
		</Swiper>
	);
};