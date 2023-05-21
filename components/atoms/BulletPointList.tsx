import { List } from "@/types/types";
import Image from "next/image";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";

interface Props {
  bulletList: Array<List>;
}

export default function BulletPointList({ bulletList }: Props) {
  return (
    <div>
      {bulletList.map(({ name, description, image }, index) => {
        const imageData = image?.data;
        const { width, height, src } = extractImageData(
          imageData,
          IMAGE_SIZE.LARGE
        );
        return (
          <div key={name} className={"flex gap-x-[60px] mb-[70px]"}>
            <div className={"w-[90px]"}>
              <Image
                className={"w-full"}
                src={src}
                alt="Banner"
                width={width}
                height={height}
              />
            </div>
            <div className={"mb-[20px] text-[21px] text-[#454654] w-[500px]"}>
              <div className={"mr-[20px] mt-[5px] font-bold mb-[13px]"}>
                {name}
              </div>
              <div>{description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
