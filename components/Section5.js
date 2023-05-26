import React from "react";
import Title from "./Title";

const Section5 = () => {
  return (
    <div>
      <Title title="Kategoriyalar" />
      <div className="flex flex-col items-start justify-start w-full p-8">
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a href="">Gyz isleme</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Halat gecdi</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Gyz tarap - Restoran</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Sadaka</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Gapy toyy</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Gelinalyjy</a>
        </li>
        <li className="list-none w-full border-b py-2 font-helvetica_bold">
          <a>Oglan Tarap - Restoran</a>
        </li>
      </div>
    </div>
  );
};

export default Section5;
