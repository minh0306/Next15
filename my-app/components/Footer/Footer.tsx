import footerData from "../Data/FooterData.json";
import Image from "next/image";

import InfoData from "../Data/Info.json";
import { Fragment } from "react";
const Footer = () => {
  return (
    <footer className="text-xs w-full h-full flex flex-col py-3 2xl:px-60 md:px-20 px-4 sm:px-8 bg-gray-50 gap-3 text-nowrap pt-20">
      <div className="w-full">
        <div className="grid grid-cols-5 gap-16">
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
              <div key={data.title} className="flex flex-col gap-4">
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
      <div className="flex justify-between py-3  text-gray-400 ">
        <p className="">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div>
          <p>
            Country & Region:{" "}
            {InfoData.country.map((country, index) => (
              <Fragment key={country}>
                {country}{" "}
                {index < InfoData.country.length - 1 && <span>| </span>}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
