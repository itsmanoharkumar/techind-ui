import { ImageDirection, ServiceDetail } from "@/types/types";
import Image from "next/image";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";

interface Props extends ServiceDetail {}

export default function ServiceDetail({
  id,
  name,
  description,
  icon,
  position,
  image,
}: Props) {
  const imageData = icon?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  const computedClassName =
    position === ImageDirection.LEFT
      ? "mr-[200px] rounded-r-2xl justify-start"
      : "ml-[200px] rounded-l-2xl justify-end";

  const isLeft = position === ImageDirection.LEFT;
  const imageData2 = image?.data;
  const {
    width: width2,
    height: height2,
    src: src2,
  } = extractImageData(imageData2, IMAGE_SIZE.LARGE);
  return (
    <div className={` ${computedClassName} my-[224px] flex`}>
      <div className={`max-w-[1700px] bg-[#272727] flex`}>
        {isLeft && (
          <Image
            className={"object-cover rounded-tr-[265px]"}
            src={src2}
            alt="Banner"
            width={width2}
            height={height2}
          />
        )}
        <div className={"w-[637px] mt-[60px] mx-[60px] mb-[100px]"}>
          <div className={"w-full flex justify-center mb-[40px]"}>
            <Image
              className={"w-[85px] object-cover"}
              src={src}
              alt="Banner"
              width={width}
              height={height}
            />
          </div>
          <div
            className={
              "font-bold text-center text-[36px] text-[#3D82EA] mb-[17px]"
            }
          >
            {name}
          </div>
          <div className={"text-[21px] text-white"}>{description}</div>
        </div>
        {!isLeft && (
          <Image
            className={"object-cover rounded-tl-[265px]"}
            src={src2}
            alt="Banner"
            width={width2}
            height={height2}
          />
        )}
      </div>
    </div>
  );
}
