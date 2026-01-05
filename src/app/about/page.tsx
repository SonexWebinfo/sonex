import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CompanyTimeline from "@/components/About/CompanyTimeline";
import CounterSection from "@/components/Common/CounterSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Founded in 2016, Sonex Infotech delivers innovative and scalable IT solutions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <CompanyTimeline />
      <CounterSection />
    </>
  );
};

export default AboutPage;
