"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

// ✅ Correct image paths (from public/assets)
const slides = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* ✅ Image: fill & cover */}
             <img
  src={Image}
  alt={`Slide ${index + 1}`}
  className="w-full h-full object-cover"
/>


              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4 z-10">
                <p className="text-sm tracking-widest uppercase">
                  Hair • Beauty • Aesthetics
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                  Advanced Beauty Treatments
                </h1>
                <h2 className="text-3xl italic mt-8">Feel Confident</h2>
                <div className="mt-6 flex space-x-4">
                  <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
                    BOOK NOW
                  </button>
                  <button className="bg-white text-black px-6 py-2 hover:bg-gray-200 transition">
                    VIEW PRICES
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white space-y-4 text-xl z-20">
        <a href="#" className="hover:text-gray-300 transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-300 transition">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
