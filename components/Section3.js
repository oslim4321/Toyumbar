import Image from "next/image";
import React from "react";
import Button from "./Button";
import Title from "./Title";

const Section3 = () => {
  return (
    <div className="w-full">
      <Title title={"Näme üçin biz"} />
      <div className="absolute left-0">
        {" "}
        <Image src="/LeftSectin5.svg" width="200" height="200"></Image>
      </div>
      <div className="flex items-center justify-center md:justify-between   flex-wrap-reverse">
        <div className="space-y-7 md:w-[45%] font-helvetica font-bold text-center md:text-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            venenatis tempor vitae morbi tempus. Nisl imperdiet et ac enim. Cras
            sed commodo vulputate curabitur
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            venenatis tempor vitae morbi tempus
          </p>
          <p>
            {" "}
            sagittis arcu sapien quisque non. Nec vitae volutpat magna molestie
            pellentesque neque.
          </p>
          <div className="flex justify-center">
            <Button text={"Biz bilen habarlaş"} buttonStyle={"w"} />
          </div>
        </div>
        <div className="w-0.5 h-[450px] bg-black hidden md:block"></div>
        <div>
          <Image
            className="w-[300px]"
            src="/image 11.svg"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
