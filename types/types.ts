import { StrapiImageData } from "@/types/ImageDataType";

export type Timestamp = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Menu = {
  id: string;
  attributes: {
    name: string;
    path: string;
    isVisible: string;
  };
};

interface LinkGroup {
  id: string;
  name: string;
  path: string;
  order: number;
  isVisible: boolean;
}

export type FooterLinkGroup = {
  id: string;
  name: string;
  linkGroup: LinkGroup[];
};

export type Footer = {
  id: string;
  attributes: {
    social: SocialLink[];
    group: FooterLinkGroup[];
    contact: {
      email: string;
      mobileNumber: string;
      address: string;
    };
  };
};

export type SocialLink = {
  id?: string;
  link: string;
  socialType: SOCIAL_TYPE;
  name: string;
  logo: { data: StrapiImageData };
};

export enum SOCIAL_TYPE {
  FACEBOOK = "FACEBOOK",
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
}

export type Page = {
  id: string;
  attributes: {
    name: string;
    component: Array<MainBanner | InfoBlockText>;
  };
};

export type MainBanner = {
  id: string;
  __component: string;
  header: string;
  subHeader: string;
  componentType: string;
  image: { data: StrapiImageData };
};

export type InfoBlockText = {
  id: string;
  __component: string;
  name: string;
  title: string;
  description: string;
  imageDirection: ImageDirection;
  componentType: string;
  image: { data: StrapiImageData };
};

export enum ImageDirection {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type TechnologyItem = {
  id: string;
  name: string;
  image: { data: StrapiImageData };
  description: string;
};

export type Technology = {
  id: string;
  attributes: {
    name: string;
    list: TechnologyItem[];
  };
};
