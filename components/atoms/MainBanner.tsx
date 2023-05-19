import { MainBanner } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";

interface Props extends MainBanner {}

export default function MainBanner({ id, header, subHeader, image }: Props) {
  console.log(image);
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);

  return (
    <div className="w-full relative bg-pink-600">
      <Image
        className={"w-full object-cover"}
        src={src}
        alt="Banner"
        width={width}
        height={height}
      />
      <div
        className={
          "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black opacity-50"
        }
      >
        <div className={"text-white uppercase text-[46px] mb-18px font-bold"}>
          {header}
        </div>
        <div className={"text-white text-[30px] max-w-[1300px]"}>
          {subHeader}
        </div>
      </div>
      <svg
        className={"absolute bottom-0 left-0 w-full"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F5F5FA"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,250.7C672,277,768,299,864,272C960,245,1056,171,1152,144C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
