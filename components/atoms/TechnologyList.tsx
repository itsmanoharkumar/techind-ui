import { TechnologyItem } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";

interface Props {
  technology: Array<TechnologyItem>;
}

export default function TechnologyList({ technology }: Props) {
  return (
    <div
      className={
        "flex gap-x-[140px] gap-y-[30px] justify-center mx-[179px] flex-wrap"
      }
    >
      {technology?.map(({ id, attributes: { name, list } }) => {
        return (
          <div
            key={id}
            className={
              "w-[700px] bg-white border-[2px] solid border-[#A8A8A8] p-[50px] flex"
            }
          >
            <div className={"font-bold text-[24px] mr-[80px] w-[150px]"}>
              {name}
            </div>
            <div className={"overflow-x-auto flex gap-[55px]"}>
              {list.map(({ id, name, image }) => {
                const imageData = image?.data;
                const { width, height, src } = extractImageData(
                  imageData,
                  IMAGE_SIZE.LARGE
                );
                return (
                  <div
                    key={id}
                    className={"flex flex-col items-center justify-between"}
                  >
                    <Image
                      className={"w-[50px] object-cover"}
                      src={src}
                      alt="Banner"
                      width={width}
                      height={height}
                    />
                    <div className={"text-[18px] text-[#454654] mt-[20px]"}>
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
