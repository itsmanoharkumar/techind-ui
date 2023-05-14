import logo from "@/images/logo/logo.png";
import Image from "next/image";

interface Props {
  className?: string;
}

export default function DarkLogo({ className }: Props) {
  return (
    <div className={`bg-white ${className}`}>
      <Image src={logo} alt="logo" width={100} height={100} />
    </div>
  );
}
