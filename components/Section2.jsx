import ClothesIcon from "./ClothesIcon";
import HairIcon from "./HairIcon";
import PhotostudioIcon from "./PhotostudioIcon";
import Title from "./Title";

const Section2 = () => {
  return (
    <main>
      {/* <h1 className="text-center font-josefin text-3xl md:text-[64px] mb-10"></h1> */}
      <Title title={"Hyzmatlarymyz"} />

      {/* content */}
      {/* <div className="flex justify-center flex-wrap items-center w-full"> */}
      <div className="grid grid-cols-1  md:grid-cols-3 ">
        <div className="border-2 md:border-r-0 border-black  h-[411px] flex items-center justify-center flex-col flex-1 w-full">
          <div className="h-[60%] border-b-2 border-black w-full flex items-center justify-center">
            <HairIcon />
          </div>
          <div className="h-[40%] font-josefin">
            <div className="py-4">
              <h2 className="font-[700 text-[37px] text-center">Saç bezegi</h2>
              <p className=" leading-7 font-helvetica font-[400] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis tempor vitae morbi tempus.
              </p>
            </div>
          </div>
        </div>
        {/* second  */}
        <div className="border-2 md:border-r-0 border-black  h-[411px] flex items-center justify-center flex-col flex-1 w-full">
          <div className="h-[60%] border-b-2 border-black w-full flex items-center justify-center">
            <ClothesIcon />
          </div>
          <div className="h-[40%] font-josefin">
            <div className="py-4">
              <h2 className="font-[700 text-[37px] text-center">Köýnekler</h2>
              <p className=" leading-7 font-helvetica font-[400] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis tempor vitae morbi tempus.
              </p>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="border-2 border-black  h-[411px] flex items-center justify-center flex-col flex-1 w-full">
          <div className="h-[60%] border-b-2 border-black w-full flex items-center justify-center">
            <PhotostudioIcon />
          </div>
          <div className="h-[40%] font-josefin">
            <div className="py-4">
              <h2 className="font-[700 text-[37px] text-center">Suratçylar</h2>
              <p className=" leading-7 font-helvetica font-[400] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis tempor vitae morbi tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto border-2 border-t-0 border-black">
        <p className="text-center py-5">Hemmesini görkez</p>
      </div>
    </main>
  );
};

export default Section2;
