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
      review:
        "Working on GCED NIGERIA was one of my 2022 highlights and guess who designed the website? William. I am always thrilled - not surprised (I've known him for more than 10 years) by the energy he puts into getting things done. Even when I sometimes figure that he's probably not sure of what he's doing, his response 'give me a minute and I'll figgure it out' always shows me he's got a growth mindset. He is not a 'No' person when it comes to project implementation and he has got an incredible communication skills. Who else can I recommend to be on your team as a Frontend Developer/Website Designer if not William?",
      name: "Ekundayo Opeyemi",
      role: "GCED NIGERIA",
    },
    {
      image: "",
      review:
        "Working on GCED NIGERIA was one of my 2022 highlights and guess who designed the website? William. I am always thrilled - not surprised (I've known him for more than 10 years) by the energy he puts into getting things done. Even when I sometimes figure that he's probably not sure of what he's doing, his response 'give me a minute and I'll figgure it out' always shows me he's got a growth mindset. He is not a 'No' person when it comes to project implementation and he has got an incredible communication skills. Who else can I recommend to be on your team as a Frontend Developer/Website Designer if not William?",
      name: "Ekundayo Opeyemi",
      role: "GCED NIGERIA",
    },
    //
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Recommendations</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
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
