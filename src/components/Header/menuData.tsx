import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 32,
        title: "Mobile App Development",
        path: "/services/mobile-development",
        newTab: false,
      },
      {
        id: 33,
        title: "UI/UX Design",
        path: "/services/ui-ux",
        newTab: false,
      },
      {
        id: 34,
        title: "Cloud & DevOps",
        path: "/services/cloud-devops",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Careers",
        path: "/careers",
        newTab: false,
      },
      {
        id: 62,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
      {
        id: 63,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 64,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
      {
        id: 65,
        title: "404 Error",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
