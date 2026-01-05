import SectionTitle from "../Common/SectionTitle";
import TestimonialsSlider from "./TestimonialsSlider";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Sonex Infotech delivered exactly what we needed. Clean code, smooth delivery, and great communication.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Very professional team. They understood our vision and turned it into a scalable product.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Reliable IT partner. Strong technical skills and on-time delivery every time.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#F4F7FF] py-16 md:py-20 lg:py-28 dark:bg-gray-dark">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Trusted by startups and enterprises worldwide for delivering reliable and scalable IT solutions."
          center
        />

        <TestimonialsSlider testimonials={testimonialData} />
      </div>
    </section>
  );
};

export default Testimonials;
