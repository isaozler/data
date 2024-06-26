/** Work Item Props */
export type TWorkItem = {
  label: string;
  children?: TWorkItem[];
};

/** Reference Link Props */
export type TLink = {
  href: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  title: string;
};

/** Card Props */
export type TProps = {
  imagePlaceholder?: {
    src: string;
  };
  items: {
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    type?: string;
    deliverables?: TWorkItem[];
    image?: {
      src: string;
      caption?: string;
      params?: {
        [key: string]: unknown;
      };
    };
    links?: TLink[];
  }[];
};
