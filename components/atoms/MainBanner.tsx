import { MainBanner } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";

interface Props extends MainBanner {}

export default function MainBanner({ id, header, subHeader, image }: Props) {
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);

  return (
    <div className="w-full relative bg-pink-600 mb-[76px]">
      <Image
        className={"w-full object-cover"}
        src={src}
        alt="Banner"
        width={width}
        height={height}
      />
      <div
        className={
          "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50"
        }
      >
        <div className={"text-white uppercase text-[46px] mb-[18px] font-bold"}>
          {header}
        </div>
        <div className={"text-white text-[30px] max-w-[1400px]"}>
          {subHeader}
        </div>
      </div>
    </div>
  );
}
