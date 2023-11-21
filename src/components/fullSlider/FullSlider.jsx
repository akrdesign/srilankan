import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "./styles.sass";

const FullSlider = ({ data }) => {
  return (
    <div className="full__slider__wrapper">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.url} alt={image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FullSlider;
