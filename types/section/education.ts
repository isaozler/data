export type TProps = {
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
    credential?: {
      id: string;
    };
  }[];
};
