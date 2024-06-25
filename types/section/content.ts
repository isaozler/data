export type TProps = {
  image?: {
    src: string;
    caption: string;
    params: {
      [key: string]: any;
    };
  };
  text: string[];
};
