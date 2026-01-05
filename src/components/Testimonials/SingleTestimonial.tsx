import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div
        className="
          rounded-lg 
          bg-white 
          p-8 
          shadow-two 
          transition-all 
          duration-300 
          hover:-translate-y-2 
          hover:scale-[1.03] 
          hover:shadow-one 
          dark:bg-dark 
          dark:shadow-three 
          dark:hover:shadow-gray-dark
        "
      >
        {/* Stars */}
        <div className="mb-5 flex items-center space-x-1 text-yellow">
          {[...Array(star)].map((_, index) => (
            <span key={index}>{starIcon}</span>
          ))}
        </div>

        {/* Content */}
        <p className="mb-8 border-b border-body-color/10 pb-8 text-base leading-relaxed text-body-color dark:border-white/10 dark:text-white">
          “{content}”
        </p>

        {/* Author */}
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
