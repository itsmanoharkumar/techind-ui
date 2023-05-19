import qs from "qs";
import fetcher from "@/service/service";
import { API_ROUTES } from "@/helpers/constants";
import { Menu, Page } from "@/types/types";
import { useDispatch } from "react-redux";
import {
  setFooterData,
  setMenuList,
  setPageData,
  setTechnologyData,
} from "@/store/appSlice";
import Head from "next/head";
import { pageComponentMap } from "@/helpers/componentMap";

export async function getStaticProps({ params }: { params: { id: string } }) {
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
    filters: {
      name: params?.id,
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

export async function getStaticPaths() {
  const { data } = await fetcher(`${API_ROUTES.MENU}`);

  const paths = data?.map((item: any) => {
    const pageName = item.attributes?.pageName;
    console.log(pageName);
    return {
      params: {
        id: String(pageName),
      },
    };
  });
  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
}

interface PageProps {
  menu: Menu[];
  footer: any;
  page: Page;
  technology: any;
}

export default function GenericPage({
  menu,
  footer,
  page,
  technology,
}: PageProps) {
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
