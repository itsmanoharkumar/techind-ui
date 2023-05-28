import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";
import { EnquirySection } from "@/types/types";
import EnquiryForm from "@/components/molecules/EnquiryForm";

interface Props extends EnquirySection {}

export default function EnquirySection({ header, description, image }: Props) {
  const imageData = image?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  return (
    <div className={"flex justify-center items-center mb-[200px]"}>
      <div
        className={"flex rounded-[50px] bg-white overflow-hidden shadow-2xl"}
      >
        <div className={"w-1/2 mt-[90px] px-[80px]"}>
          <div>
            <div className={"text-[50px] font-bold text-[#3D82EA] mb-[18px]"}>
              {header}
            </div>
            <div className="text-[18px] mb-[40px]">{description}</div>
            <div className={"mb-[70px]"}>
              <EnquiryForm />
            </div>
          </div>
        </div>
        <div
          className={
            "w-1/2 flex justify-center items-center bg-[#EEEEEE] px-[80px]"
          }
        >
          <Image
            className={"min-w-[545px] object-cover"}
            src={src}
            alt="Banner"
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}
