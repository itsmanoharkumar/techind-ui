import Image from "next/image";
import emailIcon from "@/images/email.png";
import phoneIcon from "@/images/phone.png";
import addressIcon from "@/images/address.png";

interface Props {
  email: string;
  phone: string;
  address: string;
}

export default function FooterContact({ email, phone, address }: Props) {
  return (
    <div className={"text-white"}>
      <div
        className={
          "text-[#FF9933] font-extrabold text-[18px] mb-[23px] uppercase"
        }
      >
        Contact
      </div>
      <div className={"mb-[24px] flex"}>
        <div>
          <Image className={"mr-3"} alt={"Email"} src={emailIcon} />
        </div>
        <div>{email}</div>
      </div>
      <div className={"mb-[24px] flex"}>
        <div>
          <Image className={"mr-3"} alt={"Email"} src={phoneIcon} />
        </div>
        <div>{phone}</div>
      </div>
      <div className={"mb-[24px] flex  w-[400px]"}>
        <div>
          <Image className={"mr-3"} alt={"Email"} src={addressIcon} />
        </div>
        <div>{address}</div>
      </div>
    </div>
  );
}
