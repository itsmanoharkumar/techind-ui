import Head from "next/head";
import fetcher from "@/service/service";
import { API_ROUTES } from "@/helpers/constants";
import { Menu, Page } from "@/types/types";
import qs from "qs";
import { useDispatch } from "react-redux";
import {
  setFooterData,
  setMenuList,
  setPageData,
  setTechnologyData,
} from "@/store/appSlice";
import { pageComponentMap } from "@/helpers/componentMap";

export async function getStaticProps() {
  const menuQuery = qs.stringify({
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
  const pageDataQuery = qs.stringify({
    filter: {
      name: "Home",
    },
    populate: {
      component: {
        on: {
          "page.banner": {
            populate: "*",
          },
          "page.info-block-text": {
            populate: "*",
          },
          "page.info-block-point": {
            populate: {
              bulletList: {
                populate: "*",
              },
              image: "*",
            },
          },
          "page.services": {
            populate: {
              serviceList: {
                populate: "*",
              },
            },
          },
          "page.partner-list": {
            populate: {
              partnerList: {
                populate: "*",
              },
            },
          },
          "page.technologies": {
            populate: {
              partnerList: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });
  const technologyQuery = qs.stringify({
    populate: {
      list: {
        populate: "*",
      },
    },
  });
  const { data: menuData } = await fetcher(`${API_ROUTES.MENU}?${menuQuery}`);
  const { data: pageData } = await fetcher(
    `${API_ROUTES.PAGE}?${pageDataQuery}`
  );
  const { data: footerData } = await fetcher(
    `${API_ROUTES.FOOTER}?${footerQuery}`
  );
  const { data: technologyData } = await fetcher(
    `${API_ROUTES.TECHNOLOGY}?${technologyQuery}`
  );
  return {
    props: {
      menu: menuData,
      footer: footerData,
      page: pageData && pageData.length > 0 ? pageData[0] : null,
      technology: technologyData,
    },
  };
}

interface PageProps {
  menu: Menu[];
  footer: any;
  page: Page;
  technology: any;
}

export default function Home({ menu, footer, page, technology }: PageProps) {
  const dispatch = useDispatch();
  dispatch(setMenuList(menu));
  dispatch(setFooterData(footer));
  dispatch(setPageData(page));
  dispatch(setTechnologyData(technology));
  const componentList = page?.attributes?.component;
  return (
    <>
      <Head>
        <title>TechIND</title>
      </Head>
      <main className={`min-h-screen bg-[#F5F5FA]`}>
        {componentList?.map((item: any, index: number) => {
          const Component = pageComponentMap[item.__component];
          if (!Component) return null;
          return <Component key={index} {...item} technology={technology} />;
        })}
      </main>
    </>
  );
}
