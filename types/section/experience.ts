/** Project Props */
export type TProjectItem = {
  label: string;
  children?: TProjectItem[];
};

/** Card Props */
export type TProps = {
  imagePlaceholder?: {
    src: string;
  };
  items: {
    image?: {
      src: string;
      caption?: string;
      params?: {
        [key: string]: unknown;
      };
    };
    title: string;
    subTitle?: string;
    place?: string;
    date?: string;
    achievements?: string[];
    roles?: string[];
    projects?: TProjectItem[];
  }[];
};
