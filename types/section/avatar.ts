import { TBaseCardProps } from "../index.ts";

export type TProps = TBaseCardProps & {
  image: {
    src: string;
    caption: string;
  };
  text: string;
  footNote: string;
};
