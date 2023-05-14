import Link from "next/link";
import clsx from "clsx";

interface Props {
  name: string;
  path: string;
  currentPath: string;
}

export default function MenuItem({ name, path, currentPath }: Props) {
  const isActive = path === currentPath;
  const computedClassName = clsx({
    "text-[#226DFF] font-bold": isActive,
  });

  return (
    <div className={`text-[20px] font-medium ${computedClassName}`}>
      {<Link href={path}>{name}</Link>}
    </div>
  );
}
