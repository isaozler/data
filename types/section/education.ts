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
    /** `MM-YYYY`, `YYYY`, or a range of either joined by ` - ` (end may be `NOW` for ongoing) */
    date: string;
    credential?: {
      id: string;
    };
  }[];
};
