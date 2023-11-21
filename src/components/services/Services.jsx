import React from "react";
import { useSelector } from "react-redux";
import { serviceSelector } from "../../redux/serviceSlice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Card from "../common/card/Card";

import "./styles.sass";

const Services = () => {
  const services = useSelector(serviceSelector);
  return (
    <section className="service__section">
      <h1 className="heading">Value Added Services</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <div className="service__card__container">
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  image={service.image}
                  heading={service.heading}
                  content={service.content}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Services;
