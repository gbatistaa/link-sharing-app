import { renderToStaticMarkup } from "react-dom/server";

export const generateStaticHTML = (Component: JSX.Element): string => {
  return renderToStaticMarkup(Component);
};
