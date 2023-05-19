import { Technology, TechnologyItem } from "@/types/types";
import TechnologyList from "@/components/atoms/TechnologyList";

interface Props extends Technology {
  technology: Array<TechnologyItem>;
}

export default function Technology({ title, description, technology }: Props) {
  return (
    <>
      <div className={"flex flex-col justify-center items-center pb-[70px]"}>
        <div className={"mb-18px text-bold text-[#002D70] text-[36px]"}>
          {title}
        </div>
        <div className={"text-[18px] w-[962px] text-center"}>{description}</div>
      </div>
      <TechnologyList technology={technology} />
    </>
  );
}
