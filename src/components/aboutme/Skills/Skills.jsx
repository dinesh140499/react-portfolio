import { RiArrowRightDownLine, RiArrowRightUpLine } from "@remixicon/react";
import React, { useState } from "react";
import work from "../../../assets/images/work.webp";
import work2 from "../../../assets/images/work2.webp";

const all_works = [
  {
    id: 1,
    cat: "food and beverages",
    img: work,
  },
  {
    id: 2,
    cat: "vista point",
    img: work2,
  },
  {
    id: 3,
    cat: "(mic) merchandise",
    img: work,
  },
  {
    id: 4,
    cat: "scenic overlook",
    img: work2,
  },
];

const Skills = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <>
      <div className="px-5">
        <h3 className="uppercase text-xl text-white tracking-widest py-5  border-b border-white">
          All Work
        </h3>
        <ul className="mt-10 ">
          {all_works?.map((work, i) => (
            <li
              key={i}
              className=" text-white uppercase flex items-center justify-between border-b border-white py-4 max-w-[50%] cursor-pointer text-2xl hover:ps-5 hover:font-bold duration-300 ease-in-out"
              style={{ fontFamily: "var(--font-italic)" }}
              onMouseEnter={() => setIsActive(work.cat)}
              onMouseLeave={() => setIsActive("")}
            >
              {work.cat}
              {isActive === work.cat && (
                <>
                  {work?.img && (
                    <img
                      src={work?.img}
                      className="w-30 h-10 object-cover"
                      alt={work.cat}
                    />
                  )}
                  <span>
                    {isActive === work.cat ? (
                      <RiArrowRightUpLine className="h-8 w-8 " />
                    ) : (
                      <RiArrowRightDownLine className="h-8 w-8 " />
                    )}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
