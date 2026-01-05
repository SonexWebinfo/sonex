"use client";

import Image from "next/image";

const partners = [
    { name: "Partner 1", logo: "/images/partners/partner-1.png" },
    { name: "Partner 2", logo: "/images/partners/partner-2.png" },
    { name: "Partner 3", logo: "/images/partners/partner-3.png" },
    { name: "Partner 4", logo: "/images/partners/partner-4.png" },
    { name: "Partner 5", logo: "/images/partners/partner-5.png" },
    { name: "Partner 6", logo: "/images/partners/partner-6.png" },
];

const PartnerSlider = () => {
    return (
        <section className="bg-gray-50 py-16 dark:bg-gray-dark md:py-20 lg:py-24">
            <div className="container">
                {/* Title */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-black dark:text-white">
                        Trusted Partners
                    </h2>
                    <p className="mt-3 text-body-color dark:text-body-color-dark">
                        We proudly collaborate with industry-leading companies worldwide.
                    </p>
                </div>

                {/* Slider */}
                <div className="group relative overflow-hidden">
                    <div className="flex w-max gap-14 animate-scroll group-hover:pause-animation">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex min-w-[140px] items-center justify-center sm:min-w-[180px]"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={80}
                                    className="opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:invert"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
