/**
 * @typedef {import("@prismicio/client").Content.GridListSlice} GridListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridListSlice>} GridListProps
 * @param {GridListProps}
 */

import React from "react";
import styles from "./index.module.scss";
import SliceSection from "@/components/slices/SliceSection";
import VariationGridListWithPricing from "./variants/GridListWithPricing";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
const GridList = ({ slice, context }) => {
  console.log(slice.primary.background_image_top ? "dfg" : "eds")
  return (
    <SliceSection
      contextArray={context}
      sliceId={slice.id}
      sliceType={slice.slice_type}
      sliceVariation={slice.variation}
      noContainer={slice.variation ? "textSplashWithForm" : true}
      classes={clsx(styles["background-color"], { "relative mt-48 pt-0": slice.primary.background_image_top })}
      backgroundColor={slice.primary.background_color}
    >
      <VariationComponent data={slice} />
    </SliceSection>
  );
};

const VariationComponent = ({ data }) => {
  const { primary, items, variation } = data;
  if (variation === "gridListWithPricingTable") {
    return <VariationGridListWithPricing primary={primary} items={items} />;
  }
  if (variation === "default") {
    return <VariationDefault primary={primary} items={items} />;
  }
  return <VariationDefault primary={primary} items={items} />;
};

const VariationDefault = ({ primary, items }) => {

  return (
    <div>
      <PrismicRichText field={primary.heading} />
      dfsgerdsf
    </div>
  );
};

export default GridList;
