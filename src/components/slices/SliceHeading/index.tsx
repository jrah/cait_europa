import { ReactNode } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
export const sliceHeadingStyles = styles;
function SliceHeading({
  children,
  isPageHeadline,
  className,
  cssModuleElement
}: {
  children: ReactNode;
  isPageHeadline: boolean;
  className?: string;
}) {
  const HeadingTag = isPageHeadline ? "h1" : "h2";
  const cssClasses = className ? `${className} ${styles.type}` : styles.type;
  console.log(cssModuleElement)
  return <HeadingTag className={clsx(cssClasses, cssModuleElement)} >{children}</HeadingTag>;
}

export default SliceHeading;
