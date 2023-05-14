import { FooterLinkGroup } from "@/types/types";
import Link from "next/link";

interface Props {
  footerLinkGroup: FooterLinkGroup;
}

export default function FooterLinkGroup({ footerLinkGroup }: Props) {
  const name = footerLinkGroup?.name;
  const footerLink = footerLinkGroup?.linkGroup;
  return (
    <div>
      <div
        className={
          "text-[#FF9933] font-extrabold text-[18px] mb-[23px] uppercase"
        }
      >
        {name}
      </div>
      <div>
        {footerLink?.map((footerLink) => (
          <div
            key={footerLink.id}
            className={"text-white text-[14px] py-[10px]"}
          >
            <Link href={footerLink.path}> {footerLink.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
