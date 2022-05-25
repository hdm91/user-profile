import { Bem } from "../../utils";

import "./Layout.scss";

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const cls = Bem("layout");

export function Layout({ children }: LayoutProps) {
  return (
    <div className={cls()}>
      <div className={cls("content")}>{children}</div>
    </div>
  );
}
