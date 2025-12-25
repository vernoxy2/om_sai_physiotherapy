import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/HomePageImgs/NavLogo.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About Us", url: "/aboutus" },
  { id: 3, name: "Conditions", url: "/conditions" },
  {
    id: 4,
    name: "Services",
    submenu: [
      {
        id: 41,
        name: "Physiotherapy in Mississauga",
        url: "/services/physiotherapy-mississauga",
      },
      { id: 42, name: "Chiropractic Care", url: "/services/chiropractic-care" },
      { id: 43, name: "Massage Therapy", url: "/services/massage-therapy" },
      {
        id: 44,
        name: "Acupuncture Treatment",
        url: "/services/acupuncture-treatment",
      },
      { id: 45, name: "Shockwave Therapy", url: "/services/shockwave-therapy" },
      { id: 46, name: "Spinal Traction", url: "/services/spinal-traction" },
    ],
  },
  { id: 5, name: "Products", url: "/products" },
  { id: 6, name: "FAQ", url: "/faq" },
  { id: 7, name: "Contact Us", url: "/contactus" },
  //  {
  //   id: 8,
  //   name: "Admin",
  //   submenu: [
  //     { id: 81, name: "Login", url: "/admin/login" },
  //     { id: 82, name: "Dashboard", url: "/admin/dashboard" },
  //   ],
  // },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [desktopSticky, setDesktopSticky] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const desktopRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDesktopDropdown(null);
        setDesktopSticky(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleMainClick = (menuId, hasSubmenu) => {
    setActiveMenu(menuId);
    if (!hasSubmenu) {
      setActiveSubmenu(null);
      setDesktopDropdown(null);
      setDesktopSticky(null);
    }
  };

  const handleSubmenuClick = (submenuId, parentId) => {
    setActiveSubmenu(submenuId);
    setActiveMenu(parentId);
    setDesktopDropdown(null);
    setDesktopSticky(null);
    setMenuOpen(false);
  };

  return (
    <nav className="absolute left-1/2 -translate-x-1/2 top-3 lg:top-5 w-full z-50 container">
      <div className="flex justify-between items-center bg-white rounded-full py-2 lg:p-1">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8 lg:gap-16">
          <Link to="/" className="flex items-center">
            <img src={navLogo} alt="logo" className="ml-4 h-7 lg:h-10" />
          </Link>

          {/* DESKTOP MENU (only on lg and above) */}
          <ul
            ref={desktopRef}
            className="hidden 2xl:flex 2xl:space-x-8 relative gap-5"
          >
            {menuItems.map((link) => {
              const hasSubmenu = !!link.submenu;
              const isActiveMain = activeMenu === link.id;

              return (
                <li
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => {
                    if (!desktopSticky && hasSubmenu)
                      setDesktopDropdown(link.id);
                  }}
                  onMouseLeave={() => {
                    if (!desktopSticky && hasSubmenu) setDesktopDropdown(null);
                  }}
                >
                  {hasSubmenu ? (
                    <button
                      onClick={() => {
                        handleMainClick(link.id, true);
                        const isOpen = desktopSticky === link.id;
                        setDesktopSticky(isOpen ? null : link.id);
                        setDesktopDropdown(isOpen ? null : link.id);
                      }}
                      className={`flex items-center gap-1 text-base font-medium transition-colors duration-300 ${
                        isActiveMain
                          ? "text-primary font-bold"
                          : "text-[#696969] hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={18} />
                    </button>
                  ) : (
                    <Link
                      to={link.url}
                      onClick={() => handleMainClick(link.id, false)}
                      className={`flex items-center text-base font-medium transition-colors duration-300 ${
                        isActiveMain
                          ? "text-primary font-bold"
                          : "text-[#696969] hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {hasSubmenu &&
                    (desktopDropdown === link.id ||
                      desktopSticky === link.id) && (
                      <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl w-56 py-2">
                        {link.submenu.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.url}
                              onClick={() =>
                                handleSubmenuClick(sub.id, link.id)
                              }
                              className={`block py-2 px-4 text-sm ${
                                activeSubmenu === sub.id
                                  ? "text-primary font-bold"
                                  : "text-[#696969] hover:text-primary"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* DESKTOP CTA (only on lg and above) */}
        <Link to="/contactus" className="hidden 2xl:block mr-1">
          <button className="bg-primary text-white lg:px-6 lg:py-4 rounded-full text-base">
            Get In Touch
          </button>
        </Link>

        {/* HAMBURGER MENU (visible on all screens < lg, including iPads) */}
        <button
          className="2xl:hidden p-2 bg-primary rounded-xl text-white mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE / IPAD MENU */}
      {/* {menuOpen && (
        <div className="lg:hidden bg-white w-full rounded-3xl border border-gray-300 shadow-xl mt-2"> */}
      {menuOpen && (
        <div className="2xl:hidden bg-white w-full rounded-3xl border border-gray-300 shadow-xl mt-2">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((link) => {
              const hasSubmenu = !!link.submenu;

              return (
                <li key={link.id} className="w-full text-center">
                  {hasSubmenu ? (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.id ? null : link.id
                        )
                      }
                      className="w-full flex justify-center items-center gap-2 text-base text-[#696969]"
                    >
                      {link.name}
                      <ChevronDown size={18} />
                    </button>
                  ) : (
                    <Link
                      to={link.url}
                      onClick={() => setMenuOpen(false)}
                      className="block text-base text-[#696969]"
                    >
                      {link.name}
                    </Link>
                  )}

                  {hasSubmenu && mobileDropdown === link.id && (
                    <ul className="mt-2 space-y-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.url}
                            onClick={() => handleSubmenuClick(sub.id, link.id)}
                            className="block text-sm text-[#696969]"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
