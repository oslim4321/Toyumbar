import React from "react";
import Title from "./Title";

const Section4 = () => {
  return (
    // <div
    //   style={{
    //     backgroundImage: "url(/Rectangle23.svg)",
    //     width: "100%",
    //     backgroundSize: "cover", // set the background size to cover the entire container
    //     backgroundPosition: "center", // set the position of the background image to the center
    //     backgroundRepeat: "no-repeat", // prevent the background image from repeating
    //     // Height: "300px", // set a minimum height for the container
    //   }}
    //   className="text-white absolute w-full left-0 right-0 "
    // >
    //   <div className=" py-10">
    //     <Title title="Ähli meseleleriňiz bir ýerden çözülýär!" />
    //     <p className="text-center font-helvetica md:text-[24px]">
    //       Hyzmatlarymyz
    //     </p>
    //   </div>
    // </div>

    <section className="relative flex flex-col space-y-4 py-28 font-josefin_bold font-bold p-10 bg-orange-900 w-full items-center justify-center text-center">
      <div className=" py-10 text-white">
        <Title title="Ähli meseleleriňiz bir ýerden çözülýär!" />{" "}
        <p className="text-center font-helvetica md:text-[24px]">
          Hyzmatlarymyz{" "}
        </p>{" "}
      </div>
      <div className="w-80 h-80 opacity-20 absolute rounded-full top-20 -left-36 bg-white"></div>
      <div className="w-20 h-20 opacity-20 absolute rounded-full -top-10 right-8 bg-white"></div>
    </section>
  );
};

export default Section4;
