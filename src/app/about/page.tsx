import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sonex Infotech | Innovative IT Solutions Company",
  description:
    "Founded in 2016, Sonex Infotech is a technology-driven IT company delivering scalable, secure, and innovative software solutions for startups, enterprises, and growing businesses.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Founded in 2016, Sonex Infotech has been delivering innovative and reliable IT solutions, helping startups and enterprises transform ideas into powerful digital products using modern technology."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
