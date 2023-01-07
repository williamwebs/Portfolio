import React from "react";
import "./Testimonial.css";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const data = [
    {
      image: "",
      review: "jkjlk",
      name: "klmk,",
      role: "khjlk",
    },
    {
      image: "",
      review: "",
      name: "",
      role: "",
    },
    {
      image: "",
      review: "",
      name: "",
      role: "",
    },
    {
      image: "",
      review: "",
      name: "",
      role: "",
    },
    {
      image: "",
      review: "",
      name: "",
      role: "",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Recommendations</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial-container"
      >
        {data.map(({ image, review, name, role }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={image} alt="" />
              </div>

              <p className="clients-review">{review}</p>
              <h5>{name}</h5>
              <small>{role}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
