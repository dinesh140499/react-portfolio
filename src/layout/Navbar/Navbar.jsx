import { RiArrowRightLongLine } from "@remixicon/react";
import "./navbar.css";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About Me", link: "" },
  { name: "Resume", link: "#about" },
];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const url = new URL(window.location.href).hash;
    setCurrentPage(navItems.findIndex((item) => item.link === url) + 1);
  }, []);

  return (
    <nav>
      <div>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => setCurrentPage(navItems.indexOf(item) + 1)}
            >
              <div>
                <a href={item.link}>{item.name}</a>
                <p>
                  <span>explore</span>
                  <RiArrowRightLongLine />
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h2>{"0" + currentPage}</h2>
          <div>
            <p>{"0" + currentPage}</p>
            <span></span>
            <p>{"0" + navItems.length}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
