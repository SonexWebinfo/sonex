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
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-dark">
            <div className="container">
                {/* Section Title */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-black dark:text-white">
                        Trusted by Our Partners
                    </h2>
                    <p className="mt-3 text-body-color dark:text-body-color-dark">
                        We collaborate with industry-leading companies worldwide.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div className="flex w-max animate-scroll gap-12">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[160px]"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={80}
                                    className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
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
