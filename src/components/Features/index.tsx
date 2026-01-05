import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {/* BACKGROUND BALLOONS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute top-10 left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-pulse"></span>

        <span className="absolute top-1/3 right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-[float_6s_ease-in-out_infinite]"></span>

        <span className="absolute bottom-20 left-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-[float_8s_ease-in-out_infinite]"></span>
      </div>

      <div className="container relative z-10">
        <SectionTitle
          title="Key Features"
          paragraph="Powerful IT solutions designed to streamline operations, enhance performance, and drive sustainable business growth through modern technology."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
