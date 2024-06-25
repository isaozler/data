import { TBaseCardProps } from "../";

export type TProps = TBaseCardProps & {
  image: {
    src: string;
    caption: string;
  };
  text: string;
  footNote: string;
};
