import { List } from "@/types/types";

interface Props {
  bulletList: Array<List>;
}

export default function BulletPointList({ bulletList }: Props) {
  return (
    <div>
      {bulletList.map(({ name, description, image }, index) => {
        return (
          <div key={index} className={"mb-[20px] text-[21px] text-[#454654]"}>
            <div className={"mr-[20px] mt-[5px]"}>{name}</div>
            <div>{description}</div>
          </div>
        );
      })}
    </div>
  );
}
