import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center font-josefin text-3xl md:text-[64px] mb-10">
        {title}
      </h1>
    </div>
  );
};

export default Title;
