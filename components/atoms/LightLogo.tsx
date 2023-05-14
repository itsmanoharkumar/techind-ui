import logo from "@/images/logo/LightLogo.png";
import Image from "next/image";

interface Props {
  className?: string;
}

export default function LightLogo({ className }: Props) {
  return (
    <div className={`bg-white ${className}`}>
      <Image src={logo} alt="logo" width={500} height={500} />
    </div>
  );
}
