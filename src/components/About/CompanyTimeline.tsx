"use client";

const timelineData = [
    {
        year: "2016",
        title: "Company Founded",
        description:
            "Sonex Infotech was founded with a vision to deliver reliable and innovative IT solutions for growing businesses.",
    },
    {
        year: "2018",
        title: "First Enterprise Projects",
        description:
            "Successfully delivered enterprise-level web and software solutions for multiple clients.",
    },
    {
        year: "2020",
        title: "Expansion & Cloud Solutions",
        description:
            "Expanded services into cloud-based platforms and scalable SaaS applications.",
    },
    {
        year: "2022",
        title: "Global Client Base",
        description:
            "Started working with international clients across multiple industries.",
    },
    {
        year: "2024",
        title: "Innovation & Growth",
        description:
            "Focused on modern technologies, automation, and performance-driven digital products.",
    },
];

const CompanyTimeline = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-dark">
            <div className="container">
                <div className="mx-auto mb-12 max-w-[600px] text-center">
                    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                        Our Journey
                    </h2>
                    <p className="text-body-color dark:text-body-color-dark">
                        From humble beginnings in 2016 to becoming a trusted IT partner.
                    </p>
                </div>

                <div className="relative mx-auto max-w-[800px]">
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary/20 -translate-x-1/2"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-12 flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                        >
                            <div className="w-full max-w-[360px] rounded-lg bg-white p-6 shadow-md dark:bg-dark">
                                <span className="text-primary text-sm font-semibold">
                                    {item.year}
                                </span>
                                <h3 className="mt-2 mb-2 text-xl font-bold text-black dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-body-color dark:text-body-color-dark">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyTimeline;
