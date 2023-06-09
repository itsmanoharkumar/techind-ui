import * as React from "react";
import DarkLogo from "@/components/atoms/DarkLogo";
import Menu from "@/components/molecules/Menu";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectMenuList } from "@/store/appSlice";
import Link from "next/link";

function AppBar() {
  const router = useRouter();
  const currentRoute = router.asPath;
  const menuList = useSelector(selectMenuList);
  return (
    <div className={`w-full h-[76px] bg-white`}>
      <div
        className={"w-full h-full flex px-[20px] items-center justify-between"}
      >
        <Link href={"/"}>
          <DarkLogo />
        </Link>
        <Menu menuList={menuList} currentPath={currentRoute} />
      </div>
    </div>
  );
}

export default AppBar;
