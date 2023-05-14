import LightLogo from "@/components/atoms/LightLogo";
import { Footer } from "@/types/types";
import FooterLinkGroup from "@/components/molecules/FooterLinkGroup";
import FooterContact from "@/components/atoms/FooterContact";
import SocialLinkGroup from "@/components/atoms/SocialLinkGroup";

interface Props {
  footerData: Footer;
}

export default function Footer({ footerData }: Props) {
  const footerLinkGroup = footerData?.attributes?.group;
  const contact = footerData?.attributes?.contact;
  const social = footerData?.attributes?.social;

  const { email, address, mobileNumber } = contact || {};
  return (
    <div
      className={`h-[314px] w-full flex justify-around bg-[#002D70] py-[50px]`}
    >
      <div className={"pl-[100px] pr-[150px]"}>
        <LightLogo className={`bg-transparent w-[171px]`} />
        <div className={"text-[14px] text-white"}>
          © 2022 TechINDs All Rights Reserved
        </div>
      </div>
      {footerLinkGroup?.map((footerLinkGroup) => (
        <FooterLinkGroup
          key={footerLinkGroup.id}
          footerLinkGroup={footerLinkGroup}
        />
      ))}
      <FooterContact address={address} email={email} phone={mobileNumber} />
      <SocialLinkGroup socialLinkList={social} />
    </div>
  );
}
