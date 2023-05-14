import Head from "next/head";
import fetcher from "@/service/service";
import { API_ROUTES } from "@/helpers/constants";
import { Menu } from "@/types/types";
import qs from "qs";
import { useDispatch } from "react-redux";
import { setFooterData, setMenuList } from "@/store/appSlice";

export async function getStaticProps() {
  const query = qs.stringify({
    sort: ["order:asc"],
  });
  const footerQuery = qs.stringify({
    populate: {
      group: {
        populate: "*",
      },
      social: {
        populate: "*",
      },
      contact: {
        populate: "*",
      },
    },
  });
  const { data } = await fetcher(`${API_ROUTES.MENU}?${query}`);
  const { data: footerData } = await fetcher(
    `${API_ROUTES.FOOTER}?${footerQuery}`
  );
  return {
    props: {
      menu: data,
      footer: footerData,
    },
  };
}

interface PageProps {
  menu: Menu[];
  footer: any;
}

export default function Home({ menu, footer }: PageProps) {
  console.log(footer);
  const dispatch = useDispatch();
  dispatch(setMenuList(menu));
  dispatch(setFooterData(footer));
  return (
    <>
      <Head>
        <title>TechIND</title>
      </Head>
      <main className={`min-h-screen p-4 pt-14 select-none`}>
        <div>Test</div>
      </main>
    </>
  );
}
