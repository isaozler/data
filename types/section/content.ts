/** Card Props */
export type TProps = {
  image?: {
    src: string;
    caption: string;
    params: {
      [key: string]: unknown;
    };
  };
  text: string[];
};
