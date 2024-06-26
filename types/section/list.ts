import { TBaseCardProps } from "../index.ts";

/** List Base Props */
type TListBase = {
  label: string;
  value: string;
  href?: {
    link: string;
    isSameSite?: boolean;
  };
};

/** List Props */
export type TList = TBaseCardProps & {
  list: TListBase[];
  hasLabels?: boolean;
};

/** Icon List Props */
export type TIconList = {
  list: (TListBase & {
    icon: {
      src: string;
      caption?: string;
    };
  })[];
};
