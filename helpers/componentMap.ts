import MainBanner from "@/components/atoms/MainBanner";
import InfoBlockText from "@/components/atoms/InfoBlockText";
import InfoBlockPoint from "@/components/molecules/InfoBlockPoint";
import Services from "@/components/atoms/Services";
import PartnerList from "@/components/atoms/PartnerList";
import Technology from "@/components/molecules/Technology";
import ServiceDetail from "@/components/atoms/ServiceDetail";
import ContactFormSection from "@/components/molecules/ContactFormSection";
import TileSection from "@/components/molecules/TileSection";
import EnquirySection from "@/components/molecules/EnquirySection";

export const pageComponentMap: Record<any, any> = {
  "page.banner": MainBanner,
  "page.info-block-text": InfoBlockText,
  "page.info-block-point": InfoBlockPoint,
  "page.services": Services,
  "page.partner-list": PartnerList,
  "page.technologies": Technology,
  "page.service-detail": ServiceDetail,
  "contact.contact-form": ContactFormSection,
  "contact.enquiry": EnquirySection,
  "page.tiles": TileSection,
};
