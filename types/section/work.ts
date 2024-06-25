export type TWorkItem = {
  label: string;
  children?: TWorkItem[];
};

export type TLink = Pick<HTMLAnchorElement, "href" | "target" | "title">;

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
        [key: string]: any;
      };
    };
    links?: TLink[];
  }[];
};
