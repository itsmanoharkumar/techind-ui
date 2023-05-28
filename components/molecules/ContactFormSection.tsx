import ContactDetail from "@/components/atoms/ContactDetail";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";
import ContactForm from "@/components/molecules/ContactForm";
import { ContactFormSection } from "@/types/types";

interface Props extends ContactFormSection {}

export default function ContactFormSection({
  header,
  description,
  contactDetail,
  geoImage,
}: Props) {
  const imageData = geoImage?.data;
  const { width, height, src } = extractImageData(imageData, IMAGE_SIZE.LARGE);
  return (
    <div className={"flex justify-center items-center mb-[200px]"}>
      <div
        className={"flex rounded-[50px] bg-white overflow-hidden shadow-2xl"}
      >
        <div className={"w-[1021px] ml-[140px] mt-[140px] mb-[118px]"}>
          <div className={"w-[550px]"}>
            <div className={"text-[54px] font-bold text-[#3D82EA] mb-[18px]"}>
              {header}
            </div>
            <div className="text-[14px] mb-[53px]">{description}</div>
            <div className={"mb-[70px]"}>
              <ContactForm />
            </div>
            <div className={"w-[500px]"}>
              <ContactDetail
                email={contactDetail?.email}
                phone={contactDetail?.mobileNumber}
                address={contactDetail?.address}
              />
            </div>
          </div>
        </div>
        <div className={"w-[419px] bg-[#183A4A] relative"}>
          <Image
            className={
              "min-w-[545px] object-cover absolute top-[100px] left-[-50%]"
            }
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
