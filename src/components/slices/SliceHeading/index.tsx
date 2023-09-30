import { ReactNode } from "react";
import styles from "./index.module.scss";
export const sliceHeadingStyles = styles;
function SliceHeading({
  children,
  isPageHeadline,
  className,
}: {
  children: ReactNode;
  isPageHeadline: boolean;
  className?: string;
}) {
  const HeadingTag = isPageHeadline ? "h1" : "h2";
  const cssClasses = className ? `${className} ${styles.type}` : styles.type;
  return <HeadingTag className={cssClasses}>{children}</HeadingTag>;
}

export default SliceHeading;
