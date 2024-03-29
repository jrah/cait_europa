import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
export const sliceSectionStyles = styles;
function SliceSection({
  children,
  contextArray,
  sliceId,
  sliceVariation,
  sliceType,
  spacingDefault,
  spacingTop,
  noContainer,
  backgroundColor,
  classes,
}: {
  children: ReactNode;
}) {
  const sliceClass = () => {
    return spacingDefault
      ? styles[`vertical-spacing-${spacingDefault}`]
      : styles["vertical-spacing-standard"];
  };

  const CSSVariableReferenceValue = backgroundColor ? {
    "--slice-background-color": backgroundColor
  } : {}
  return (
    <section
      style={CSSVariableReferenceValue}
      className={clsx(
        sliceClass(),
        { container: noContainer ? false : true },
        classes,
      )}
      data-slice-id={sliceId}
      data-slice-type={sliceType}
      data-slice-variation={sliceVariation}
    >
      {children}
    </section>
  );
}

export default SliceSection;
