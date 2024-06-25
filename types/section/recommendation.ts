import { TLink } from "./work.ts";

export type TProps = {
  items: {
    id: string;
    title: string;
    subTitle?: string;
    project: string;
    role: string;
    text: string[];
    type?: string;
    image?: {
      src: string;
      caption: string;
      params?: {
        [key: string]: unknown;
      };
    };
    links?: TLink[];
  }[];
};
