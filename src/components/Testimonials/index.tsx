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
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
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
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Trusted by startups, enterprises, and global brands worldwide."
          center
        />

        {/* Slider */}
        <div className="group relative overflow-hidden">
          <div className="flex w-max animate-scrollLTR gap-8 group-hover:[animation-play-state:paused]">
            {[...testimonialData, ...testimonialData].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="w-[350px] flex-shrink-0 transition duration-300 hover:scale-105"
                >
                  <SingleTestimonial testimonial={testimonial} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
