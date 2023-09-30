import { ReactNode } from "react";
import styles from "./index.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { clsx } from "clsx";
export const HeadingStyles = styles;
function Heading({
  heading,
  className,
  customTextColor,
  customFontSize,
  customBlockClasses,
  elementClasses
}: {
  heading: ReactNode;
  className?: string;
  customTextColor?: object;
  customFontSize?: number;
  customBlockClasses?: object;
  elementClasses?: object
}) {
  const isLabelised = (node: { spans?: any[]; }) => {
    let hasLabel = true;
    if (!node) return;
    if (!node.spans) return;
    node.spans.forEach((k: { data: { label: string | string[]; }; }, i: number) => {
      if (!k.data) return (hasLabel = false);
      if (!k.data.label) return (hasLabel = false);
      if (i > 0) return (hasLabel = false);
      if (k.data.label.includes("-break")) return (hasLabel = false);
    });
    return hasLabel;
  };


  const elementClass = (elementType, elementClasses) => {
    if (elementClasses) return elementClasses[elementType] || null
  }
  const defaultCustomBlockTextColor = {
    1: "primary-text-color",
    2: "primary-text-color",
    3: "primary-text-color",
    4: "primary-text-color",
    5: "primary-text-color",
    6: "primary-text-color",
  };

  const mergedColours = { ...defaultCustomBlockTextColor, ...customTextColor };

  type ComponentProps = {
    children: ReactNode;
    node: ReactNode;
    key: Number
  };
  const components = {
    heading2: ({ children, node }: ComponentProps) => (
      <h2
        className={clsx([
          isLabelised(node)
            ? [
              customTextColor ? customTextColor : "primary-text-color",
              customFontSize ? `h${customFontSize}` : "text-3xl",
            ]
            : null,
          className ? className : null,
          "tracking-wide",
        ])}
      >
        {children}
      </h2>
    ),
    heading3: ({ children, node }: ComponentProps) => (
      <h3
        className={clsx([
          elementClass("heading", elementClasses),
          isLabelised(node)
            ? [
              customTextColor ? customTextColor : "primary-text-color",
              customFontSize ? `h${customFontSize}` : "text-4xl",
            ]
            : null,
          className ? className : null,
          "tracking-wide",
        ])}
      >
        {children}
      </h3>
    ),
    heading4: ({ children, node }: ComponentProps) => (
      <h4
        className={clsx([
          isLabelised(node)
            ? [
              customTextColor ? customTextColor : "primary-text-color",
              customFontSize ? `h${customFontSize}` : "text-2xl",
            ]
            : null,
          className ? className : null,
          "tracking-wide",
        ])}
      >
        {children}
      </h4>
    ),
    paragraph: ({ children }: ComponentProps) => (
      <p
        className={elementClass("paragraph", elementClasses)}>
        {children}
      </p>
    ),
    label: ({ node, children, key }: ComponentProps) => {
      if (node.data.label === "h1-break") {
        return (
          <span
            key={key}
            className={`${node.data.label.replace("-break", "")} ${mergedColours[parseInt(node.data.label.replace(/\D/g, ""))]
              } ${defaultCustomBlockClasses[
              parseInt(node.data.label.replace(/\D/g, ""))
              ]
              } block`}
          >
            {children}
          </span>
        );
      }
      return (
        <span
          key={key}
          className={clsx(
            [
              `${node.data.label.replace("-break", "")} ${mergedColours[parseInt(node.data.label.replace(/\D/g, ""))]
              } block`,
            ],
            customBlockClasses
              ? customBlockClasses[parseInt(node.data.label.replace(/\D/g, ""))]
              : null,
          )}
        >
          {children}
        </span>
      );
    },
  };
  const cssClasses = className ? `${className} ${styles.type}` : styles.type;
  return (
    <div className={cssClasses}>
      <PrismicRichText field={heading} components={components} />
    </div>
  );
}

export default Heading;
