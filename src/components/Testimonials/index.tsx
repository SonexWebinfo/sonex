"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive, clean, and distraction free.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Clean UI, smooth experience, and outstanding performance. Highly recommended.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Professional team with excellent communication and delivery quality.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Darshan Patel",
    designation: "CEO @Sonex Infotech",
    content:
      "A perfect blend of technology, design, and performance-driven solutions.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gray-light py-16 md:py-20 lg:py-28 dark:bg-bg-color-dark overflow-hidden">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Trusted by startups, enterprises, and global brands worldwide."
          center
        />
      </div>

      {/* SLIDER */}
      <div className="group relative w-full overflow-hidden">
        <div className="flex w-max animate-scrollLTR group-hover:[animation-play-state:paused]">
          {[...testimonialData, ...testimonialData].map((testimonial, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[360px] px-4 transition-transform duration-300 hover:scale-105"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-light dark:from-bg-color-dark"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-light dark:from-bg-color-dark"></div>
    </section>
  );
};

export default Testimonials;
