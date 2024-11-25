import footerData from "../Data/FooterData.json";
import Image from "next/image";

import InfoData from "../Data/Info.json";
const Footer = () => {
  return (
    <footer className="text-xs md:text-md w-full h-full flex flex-col py-3 2xl:px-60 md:px-12 lg:px-20 px-2 sm:px-4 bg-gray-50 gap-3 text-nowrap md:pt-20 pt-10">
      <div className="w-full">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-start sm:grid sm:grid-cols-5 gap-4 md:gap-12 lg:gap-24 xl:first:ml-24 ml-0">
          {footerData.map((data) =>
            data.listCategory ? (
              <div key={data.title} className="flex flex-col gap-4">
                <h4 className="font-bold uppercase">{data.title}</h4>
                <ul className="flex flex-col gap-3">
                  {data.listCategory.map((item, index) => (
                    <li key={item.name + index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div
                key={data.title}
                className="flex flex-col gap-4 items-center sm:items-start"
              >
                <h3 className="font-bold uppercase">{data.title}</h3>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={200}
                  height={200}
                />
              </div>
            )
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between py-3  text-gray-400 ">
        <p className="">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex flex-wrap">
          {/* <div> */}
          Country & Region:{" "}
          {InfoData.country.map((country, index) => (
            <span key={country} className="ml-2">
              {country} {index < InfoData.country.length - 1 && <span> |</span>}
            </span>
          ))}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
