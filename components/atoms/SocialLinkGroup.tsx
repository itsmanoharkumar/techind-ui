import { SocialLink } from "@/types/types";
import { extractImageData } from "@/helpers/helper";
import { IMAGE_SIZE } from "@/types/enums";
import Image from "next/image";
import Link from "next/link";

interface Props {
  socialLinkList: SocialLink[];
}

export default function SocialLinkGroup({ socialLinkList }: Props) {
  return (
    <div className={"flex items-center"}>
      {socialLinkList?.map((socialLink) => {
        const logo = socialLink?.logo?.data;
        const { width, height, src } = extractImageData(logo, IMAGE_SIZE.SMALL);
        return (
          <div
            key={socialLink.id}
            className={"text-white text-[14px] mr-[24px] cursor-pointer"}
          >
            <Link href={socialLink.link}>
              <Image src={src} alt="Banner" width={width} height={height} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
