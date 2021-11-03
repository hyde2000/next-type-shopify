import { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
};

export const Container: FC<Props> = ({ children, el: Component = "div" }) => {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
};
