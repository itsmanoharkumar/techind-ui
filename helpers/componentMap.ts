import MainBanner from "@/components/atoms/MainBanner";
import InfoBlockText from "@/components/atoms/InfoBlockText";
import InfoBlockPoint from "@/components/atoms/InfoBlockPoint";
import Services from "@/components/atoms/Services";
import PartnerList from "@/components/atoms/PartnerList";
import Technology from "@/components/atoms/Technology";
import ServiceDetail from "@/components/atoms/ServiceDetail";

export const pageComponentMap: Record<any, any> = {
  "page.banner": MainBanner,
  "page.info-block-text": InfoBlockText,
  "page.info-block-point": InfoBlockPoint,
  "page.services": Services,
  "page.partner-list": PartnerList,
  "page.technologies": Technology,
  "page.service-detail": ServiceDetail,
  // "contact.contact-form": MainBanner,
};
