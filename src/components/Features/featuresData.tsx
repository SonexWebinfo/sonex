import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M3 3h18v6H3V3zm0 8h18v10H3V11z" />
      </svg>
    ),
    title: "Custom Software Development",
    paragraph:
      "We build tailored software solutions designed specifically to meet your business needs, ensuring scalability, performance, and long-term reliability.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2l10 6-10 6L2 8l10-6zM2 16l10 6 10-6" />
      </svg>
    ),
    title: "Modern UI/UX Design",
    paragraph:
      "Our team delivers clean, intuitive, and user-friendly interfaces that enhance user experience and help your digital products stand out.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <circle cx="12" cy="12" r="4" />
        <path d="M2 12h4m12 0h4M12 2v4m0 12v4" />
      </svg>
    ),
    title: "Next.js & Latest Technologies",
    paragraph:
      "We use modern frameworks like Next.js, React, and cloud-native technologies to deliver fast, secure, and future-ready applications.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M4 6h16v12H4z" />
        <path d="M8 2h8v4H8z" />
      </svg>
    ),
    title: "Scalable Cloud Solutions",
    paragraph:
      "From cloud deployment to system optimization, we provide scalable and secure cloud solutions that grow with your business.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
    title: "Fully Customizable Systems",
    paragraph:
      "Our solutions are fully customizable, allowing businesses to adapt workflows, features, and integrations as their requirements evolve.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
      </svg>
    ),
    title: "Reliable Support & Maintenance",
    paragraph:
      "We provide ongoing support, monitoring, and maintenance to ensure your applications remain secure, stable, and high-performing.",
  },
];

export default featuresData;
