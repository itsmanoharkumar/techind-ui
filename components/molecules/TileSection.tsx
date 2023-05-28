import { TileSection } from "@/types/types";
import Image from "next/image";
import rightArrow from "@/images/Arrow 2.png";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";

interface Props extends TileSection {}

export default function TileSection({ name, tileList }: Props) {
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
          "px-[110px] pt-[50px] flex flex-wrap gap-[20px] justify-center"
        }
      >
        {tileList.map(({ name, description, image }, index) => {
          const computedClassName =
            index % 2 === 0
              ? "bg-[#002D70] text-white"
              : "bg-white text-[#454654]";
          const imageData = image?.data;
          const { width, height, src } = extractImageData(
            imageData,
            IMAGE_SIZE.SMALL
          );

          return (
            <div
              key={index}
              className={
                "w-[478px] text-[21px] rounded-xl shadow p-8 " +
                computedClassName
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
              <div className={"text-[27px] font-bold text-center mb-[18px]"}>
                {name}
              </div>
              <div className={"text-[16px] text-center"}>{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
