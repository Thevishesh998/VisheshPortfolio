import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import python from "../../public/python.webp";
import java from "../../public/java.png";
import mongodb from "../../public/mongodb.jpg"
import nodejs from "../../public/node.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: nodejs,
      name: "NodeJS",
    },
  ];

  return (
    <div name="Experiance" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 ml-3"
              key={id}
            >
              <img
                src={logo}
                className="w-[130px] rounded-full"
                alt={`${name} logo`}
              />
              <div className="text-center mt-2">
                <div className="font-bold text-lg">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
