import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const navs = [
    { name: "home", link: "/" },
    { name: "shop", link: "/shop" },
    { name: "services", link: "/services" },
    { name: "users", link: "/users" },
    { name: "login", link: "/login" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MyApp</div>
        <ul className="flex gap-6">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.link}
                className="text-gray-700 hover:text-blue-600 capitalize font-medium transition"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
