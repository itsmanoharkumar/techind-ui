import { PartnerList } from "@/types/types";
import Image from "next/image";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";

interface Props extends PartnerList {}

export default function PartnerList({ partnerList }: Props) {
  return (
    <div
      className={
        "flex w-full overflow-auto justify-around bg-[#F3F3F3] py-[30px] items-center mb-[200px]"
      }
    >
      {partnerList.map(({ name, image }, index) => {
        const imageData = image?.data;
        const { width, height, src } = extractImageData(
          imageData,
          IMAGE_SIZE.MEDIUM
        );
        return (
          <div key={index}>
            <div>
              <Image
                className={"object-cover"}
                src={src}
                alt="Banner"
                width={width}
                height={height}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
