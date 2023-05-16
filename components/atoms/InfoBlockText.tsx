import { InfoBlockText } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";

interface Props extends InfoBlockText {}

export default function InfoBlockText({
  name,
  title,
  description,
  imageDirection,
  image,
}: Props) {
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  return (
    <div className={"flex pt-[80px]"}>
      <div className={"w-1/2 pl-[120px] pr-[214px] mt-[30px]"}>
        <div className={"w-[130px] text-[36px] mb-[70px] text-[#454654]"}>
          {name}
        </div>
        <div className={"font-bold text-[36px] text-[#3D82EA] mb-[20px]"}>
          {title}
        </div>
        <div className={"text-[21px]"}> {description} </div>
      </div>
      <div className={"w-1/2"}>
        <Image src={src} alt={"InfoBlockText"} width={width} height={height} />
      </div>
    </div>
  );
}
