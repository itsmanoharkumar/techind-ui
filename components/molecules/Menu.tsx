import { Menu } from "@/types/types";
import MenuItem from "@/components/atoms/MenuItem";

interface Props {
  menuList: Menu[];
  currentPath: string;
}

export default function Menu({ currentPath, menuList }: Props) {
  return (
    <div className={"flex gap-[72px]"}>
      {menuList.map((menu) => {
        const {
          id,
          attributes: { name, path, isVisible },
        } = menu;
        if (!isVisible) return null;
        return (
          <MenuItem
            key={id}
            name={name}
            path={path}
            currentPath={currentPath}
          />
        );
      })}
    </div>
  );
}
