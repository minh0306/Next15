import Image from "next/image";

type BannerSimpleProps = {
  name: string;
  img: string;
  link: string;
}[];
const BannerSimple = ({ props }: { props: BannerSimpleProps }) => {
  if (props && props.length > 1) {
    return (
      <div className=" flex w-full gap-2">
        {props.map((item) => (
          <div
            key={item.name}
            className="img-container border-none rounded-md w-full relative h-[125px]"
          >
            <Image
              className="object-cover rounded-md"
              src={item.img}
              alt={item.name}
              fill
              quality={100}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="img-container relative w-full h-[102px]">
      <Image
        className="object-cover rounded-md"
        src={props[0].img}
        alt={props[0].name}
        quality={100}
        fill
      />
    </div>
  );
};
export default BannerSimple;
