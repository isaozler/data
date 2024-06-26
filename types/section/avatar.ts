import { TBaseCardProps } from "../index.ts";

/** Card Props */
export type TProps = TBaseCardProps & {
  image: {
    src: string;
    caption: string;
  };
  text: string;
  footNote: string;
};
