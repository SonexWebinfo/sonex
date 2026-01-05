import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-[120px] pb-20 dark:bg-gray-dark md:pt-[150px]"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
              Sonex Infotech <br />
              <span className="text-primary">
                Your Trusted Partner for Innovative IT Solutions
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-body-color dark:text-body-color-dark">
              Sonex Infotech is a technology-driven software company delivering
              scalable, secure, and innovative digital solutions. We specialize
              in web & mobile development, enterprise systems, and cloud-based
              platforms to help businesses grow and scale.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-8 py-4 text-white transition hover:bg-primary/90"
              >
                Get Started
              </Link>

              <Link
                href="/portfolio"
                className="rounded-md border border-primary px-8 py-4 text-primary transition hover:bg-primary hover:text-white"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE / SHAPES */}
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 h-[420px] w-[420px] rounded-full bg-primary/10"></div>
            <div className="absolute top-20 right-20 h-[300px] w-[300px] rounded-full bg-primary/20"></div>

            {/* Optional Illustration */}
            <img
              src="/images/hero/hero-illustration.svg"
              alt="Hero Illustration"
              className="relative z-10 mx-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
