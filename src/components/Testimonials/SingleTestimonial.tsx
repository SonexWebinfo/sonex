"use client";

import SingleTestimonial from "./SingleTestimonial";
import { Testimonial } from "@/types/testimonial";

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsSlider = ({ testimonials }: Props) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-scroll gap-8 group-hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="w-[350px] flex-shrink-0 transform transition duration-300 hover:scale-105"
          >
            <SingleTestimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
