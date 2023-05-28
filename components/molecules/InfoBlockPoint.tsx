import { InfoBlockPoint } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";
import BulletPointList from "@/components/atoms/BulletPointList";
import leftArrow from "@/images/Arrow 3.png";

interface Props extends InfoBlockPoint {}

export default function InfoBlockPoint({ name, image, bulletList }: Props) {
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  return (
    <div className={"flex mb-[200px]"}>
      <div className={"w-1/2 relative"}>
        <Image
          className={"absolute bottom-0 left-0"}
          src={src}
          alt={"InfoBlockText"}
          width={width}
          height={height}
        />
      </div>
      <div className={"w-1/2 pr-[120px] pl-[214px] mt-[30px]"}>
        <div
          className={
            "w-full text-[36px] mb-[70px] text-[#454654] flex justify-end"
          }
        >
          <div className={"w-[170px] whitespace-pre flex flex-col  items-end"}>
            <div className={"text-right"}>{name}</div>
            <Image src={leftArrow} alt={"Arrow"} />
          </div>
        </div>
        <div className={"flex justify-end"}>
          <BulletPointList bulletList={bulletList} />
        </div>
      </div>
    </div>
  );
}
