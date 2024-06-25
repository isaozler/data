import { TBaseCardProps } from "../index.ts";

type TListBase = {
  label: string;
  value: string;
  href?: {
    link: string;
    isSameSite?: boolean;
  };
};

export type TList = TBaseCardProps & {
  list: TListBase[];
  hasLabels?: boolean;
};

export type TIconList = {
  list: (TListBase & {
    icon: {
      src: string;
      caption?: string;
    };
  })[];
};
