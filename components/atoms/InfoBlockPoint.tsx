import { InfoBlockPoint } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";
import BulletPointList from "@/components/atoms/BulletPointList";

interface Props extends InfoBlockPoint {}

export default function InfoBlockPoint({ name, image, bulletList }: Props) {
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  return (
    <div className={"flex pt-[180px]"}>
      <div className={"w-1/2"}>
        <Image src={src} alt={"InfoBlockText"} width={width} height={height} />
      </div>
      <div className={"w-1/2 pr-[120px] pl-[214px] mt-[30px]"}>
        <div
          className={
            "w-full text-[36px] mb-[70px] text-[#454654] flex justify-end"
          }
        >
          <div className={"w-[170px]"}>{name}</div>
        </div>
        <div>
          <BulletPointList bulletList={bulletList} />
        </div>
      </div>
    </div>
  );
}
