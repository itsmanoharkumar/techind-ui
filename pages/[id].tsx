import { useRouter } from "next/router";
import qs from "qs";
import fetcher from "@/service/service";
import { API_ROUTES } from "@/helpers/constants";
import { Menu } from "@/types/types";
import { useDispatch } from "react-redux";
import { setFooterData, setMenuList } from "@/store/appSlice";

export async function getStaticProps({ params }: { params: { id: string } }) {
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

export async function getStaticPaths() {
  const { data } = await fetcher(`${API_ROUTES.MENU}`);

  const paths = data?.map((item: any) => {
    const path = item.attributes?.path;
    return {
      params: {
        id: String(path),
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
}

export default function GenericPage({ menu, footer }: PageProps) {
  const dispatch = useDispatch();
  dispatch(setMenuList(menu));
  dispatch(setFooterData(footer));
  const router = useRouter();
  return (
    <>
      <div>Test</div>
    </>
  );
}
