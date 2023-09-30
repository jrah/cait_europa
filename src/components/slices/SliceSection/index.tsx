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
  const [firstSlice] = contextArray;
  const lastSlice = contextArray[contextArray.length - 1];
  const sliceClass = () => {
    if (sliceId === firstSlice.id && sliceId != lastSlice.id) return false;
    return spacingDefault
      ? styles[`vertical-spacing-${spacingDefault}`]
      : styles["vertical-spacing-standard"];
  };

  const getBackground = (background_color) => {
    return backgroundColor;
  };
  return (
    <section
      style={{ backgroundColor: getBackground(backgroundColor) }}
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
