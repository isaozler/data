/** Card Props */
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
    place?: string;
    date?: string;
    credential?: {
      id: string;
    };
  }[];
};
