import Image from "next/image";
import emailIcon from "@/images/email.png";
import phoneIcon from "@/images/phone.png";
import addressIcon from "@/images/address.png";

interface Props {
  email: string;
  phone: string;
  address: string;
}

export default function ContactDetail({ email, phone, address }: Props) {
  return (
    <div className={"flex flex-wrap"}>
      <div className={"mb-[24px] flex"}>
        <div>
          <Image className={"mr-3"} alt={"Email"} src={phoneIcon} />
        </div>
        <div>{phone}</div>
      </div>
      <div className={"mb-[24px] flex ml-3"}>
        <div>
          <Image className={"mr-3"} alt={"Email"} src={emailIcon} />
        </div>
        <div>{email}</div>
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
