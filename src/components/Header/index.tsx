"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pathname = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
        ? "fixed z-50 bg-white/80 backdrop-blur dark:bg-gray-dark shadow-sticky transition"
        : "absolute bg-transparent"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`block ${sticky ? "py-4" : "py-6"}`}
          >
            <Image
              src="/images/logo/logo-2.svg"
              alt="logo"
              width={140}
              height={30}
              className="dark:hidden"
            />
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={140}
              height={30}
              className="hidden dark:block"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center">
            <button
              onClick={toggleNavbar}
              aria-label="Mobile Menu"
              className="lg:hidden px-3 py-2"
            >
              ☰
            </button>

            <nav
              className={`lg:flex ${navbarOpen ? "block" : "hidden"
                }`}
            >
              <ul className="lg:flex lg:space-x-10">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`block py-2 ${pathname === menuItem.path
                          ? "text-primary"
                          : "hover:text-primary"
                          }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center gap-2 py-2"
                        >
                          {menuItem.title}
                          ▼
                        </button>

                        <div
                          className={`absolute left-0 mt-2 w-52 rounded bg-white shadow dark:bg-dark ${openIndex === index ? "block" : "hidden"
                            }`}
                        >
                          {menuItem.submenu?.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.path}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle */}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
