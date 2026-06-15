"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "file_00000000146871fb8470da37da2e8b19.png",
  "file_000000001d5c71fbb7ada00d616910d7.png",
  "file_0000000020e071fb9840883892757469.png",
  "file_0000000052d071f6981b9653de1c67d4.png",
  "file_00000000569071f6a0e684ed3746df9c.png",
  "file_000000005ef071fb9cd77cc4af2962d3.png",
  "file_00000000713071fbb85b2c05baa6411d.png",
  "file_000000009c7471fb9312345712612aa8.png",
  "file_00000000ab5071fb8ad1f8a7ad6fdbd5.png",
  "file_00000000d98471fba4f45e39bfa26b65.png",
  "file_00000000e76c71fbbee2f968b37deb1a.png",
  "file_00000000ff8071fb9cb05fc29783dbbe.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full relative mt-[88px] border-b border-[#E2DDD8]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          effect={"fade"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoHeight={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="w-full relative">
              <Image
                src={`/gallery/${img}`}
                alt={`إعلان ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto block"
                sizes="100vw"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
