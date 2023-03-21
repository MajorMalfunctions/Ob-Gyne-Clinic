import React from "react";
import "../../styles/testimonials.css";
import { Data } from "./TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
      <section className="testimonial_container section" id="testimonial">
        <h1>My Clients Say</h1>
        <p>Testimonials</p>
            <br />
            <br />
        <Swiper className="testimonial_container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              576: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              }
            }}
            modules={[Pagination]}
        >
    {Data.map(({ id, image, star, title, description,  postedAt }) => {
      return (
          <SwiperSlide className="testimonial_card" key={id}>
            <img src={image} alt=""
            className="testimonial_img" />

            <h2 className="testimonial_name">{title}</h2>
            <span className="testimonial_star">{star}</span>
            <p className="testimonial_description">{description}
            </p>
            <p>Posted At: {postedAt} </p>
          </SwiperSlide>
      );
    })}
        </Swiper>
      </section>
  );
};

export default Testimonials;
