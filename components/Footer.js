import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[80%] mx-auto">
        <div className="border-t-2 border-black w-full">
          <div className="flex">
            <div className="w-[50%] space-y-5 font-helvetica mt-20 leading-8 font-bold pr-20 hidden md:block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis tempor vitae morbi tempus. Nisl imperdiet et ac enim.
                Cras sed commodo vulputate curabitur
              </p>
              <p>
                sagittis arcu sapien quisque non. Nec vitae volutpat magna
                molestie pellentesque neque.
              </p>
            </div>
            <div className="w-0.5 h-[300px] bg-black hidden md:block"></div>

            <div className="mt-20  ">
              <ul className="flex gap-6 md:gap-10 flex-wrap mb-7 font-helvetica md:pl-20">
                <Link href="#">
                  <li>Biz Barada</li>
                </Link>
                <Link href="#">
                  <li>Hyzmatlarymyz</li>
                </Link>
                <Link href="#">
                  {" "}
                  <li>Biz bilen habarlaş</li>
                </Link>
                <Link href="#">
                  <li className="md:hidden">Biz bilen habarlaş</li>
                </Link>
                {/* <li>Biz Barada</li> */}
              </ul>
              <span className="md:pl-20">email@gmail.com</span>
              {/* sicial media */}
              <ul className="flex gap-14 border-t-2 border-black">
                <Link href="">
                  {" "}
                  <li>Instagram</li>
                </Link>
                <Link href="">
                  {" "}
                  <li>Instagram</li>
                </Link>
                <Link href="">
                  {" "}
                  <li>Instagram</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
