export type TProjectItem = {
  label: string;
  children?: TProjectItem[];
};

export type TProps = {
  imagePlaceholder?: {
    src: string;
  };
  items: {
    image?: {
      src: string;
      caption?: string;
      params?: {
        [key: string]: any;
      };
    };
    title: string;
    subTitle?: string;
    placeDate?: string;
    achievements?: string[];
    roles?: string[];
    projects?: TProjectItem[];
  }[];
};
