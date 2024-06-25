export type TProps = {
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
    placeDate?: string;
    credential?: {
      id: string;
    };
  }[];
};
