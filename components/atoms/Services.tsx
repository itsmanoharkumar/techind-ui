import { Services } from "@/types/types";
import Image from "next/image";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import rightArrow from "@/images/Arrow 2.png";

interface Props extends Services {}

export default function Services({ name, serviceList }: Props) {
  return (
    <div className={"px-[120px] mb-[200px]"}>
      <div
        className={"w-[187px] text-[36px] mb-[70px] text-[#454654] uppercase"}
      >
        <div className={"whitespace-pre"}>{name}</div>
        <Image src={rightArrow} alt={"Arrow"} />
      </div>
      <div
        className={
          "px-[110px] pt-[50px] flex flex-wrap gap-x-[100px] gap-y-[165px] justify-center"
        }
      >
        {serviceList.map(({ name, description, image }, index) => {
          const computedClassName = index % 2 === 0 ? "" : "mt-[100px]";
          const imageData = image?.data;
          const { width, height, src } = extractImageData(
            imageData,
            IMAGE_SIZE.LARGE
          );

          return (
            <div
              key={index}
              className={
                "w-[368px] text-[21px] text-[#454654] " + computedClassName
              }
            >
              <div className={"w-full flex justify-center mb-[40px]"}>
                <Image
                  className={"w-[85px] object-cover"}
                  src={src}
                  alt="Banner"
                  width={width}
                  height={height}
                />
              </div>
              <div className={"text-[27px] font-bold text-[#454654]"}>
                {name}
              </div>
              <div className={"text-[#454654] text-[18px]"}>{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
