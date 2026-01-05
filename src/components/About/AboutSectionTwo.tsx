import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">

          {/* Left Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="About Sonex Infotech"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="About Sonex Infotech"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">

              {/* Who We Are */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Who We Are
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  Founded in 2016, Sonex Infotech is a technology-driven IT company
                  delivering scalable, secure, and innovative software solutions.
                  We work closely with startups, SMEs, and enterprises to build
                  reliable digital products that solve real business challenges.
                </p>
              </div>

              {/* Our Mission */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  Our mission is to empower businesses through smart and
                  future-ready technology solutions that improve efficiency,
                  automate operations, and support long-term growth.
                </p>
              </div>

              {/* Our Vision */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  Our vision is to become a trusted global IT partner known for
                  innovation, reliability, and customer success by continuously
                  evolving with emerging technologies.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
