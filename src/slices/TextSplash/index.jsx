import React from "react";
import { PrismicRichText } from "@prismicio/react";
import SliceHeading from "components/slices/SliceHeading";
import styles from "./index.module.scss";
import SliceSection from "components/slices/SliceSection";
/**
 * Props for `TextSplash`.
 */

/**
 * Component for "TextSplash" Slices.
 */
const TextSplash = ({ slice, context }) => {
  return (
    <SliceSection
      contextArray={context}
      sliceId={slice.id}
      sliceType={slice.slice_type}
      sliceVariation={slice.variation}
      noContainer={slice.variation ? "textSplashWithForm" : true}
    >
      <VariationComponent data={slice} />
    </SliceSection>
  );
};

const VariationComponent = ({ data }) => {
  const { primary, items, variation } = data;
  if (variation === "default") {
    return <VariationDefault primary={primary} items={items} />;
  }
  return <VariationDefault primary={primary} items={items} />;
};

const VariationDefault = ({ primary, items }) => {
  const components = {
    heading1: ({ children }) => (
      <SliceHeading
        className="primary-text-color font-bold leading-tight"
        isPageHeadline={primary.page_headline}
      >
        {children}
      </SliceHeading>
    ),
    heading2: ({ children }) => (
      <h2 className=" primary-text-color text-6xl font-bold tracking-wide">
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3 className=" primary-text-color text-5xl font-bold tracking-wide">
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4 className=" primary-text-color text-4xl font-bold tracking-wide">
        {children}
      </h4>
    ),
    label: ({ node, children, key }) => {
      if (node.data.label === "h1-break") {
        return (
          <span
            key={key}
            className={`${node.data.label.replace("-break", "")} block`}
          >
            {children}
          </span>
        );
      }
      return (
        <span
          key={key}
          className={`${node.data.label.replace("-break", "")} block`}
        >
          {children}
        </span>
      );
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles["heading-variant-default"]}>
        <PrismicRichText field={primary.heading} components={components} />
      </div>
      <PrismicRichText
        field={primary.sub_heading}
        components={{
          paragraph: ({ children }) => (
            <p className="mt-6 text-2xl font-light leading-relaxed tracking-tight text-blue-900">
              {children}
            </p>
          ),
        }}
      />
      <List items={items} />
    </div>
  );
};



function List({ items }) {
  const listItems = items.map((item, index) => {
    return (
      <div key={index} className={`${index}-item`}>
        <PrismicRichText
          field={item.meta_heading}
          components={{
            paragraph: ({ children }) => (
              <dt className="primary-text-color font-light">{children}</dt>
            ),
          }}
        />
        <PrismicRichText
          field={item.meta_description}
          components={{
            paragraph: ({ children }) => (
              <dd className="secondary-text-color text-2xl font-semibold">
                {children}
              </dd>
            ),
          }}
        />
      </div>
    );
  });
  return (
    <dl className="mx-auto mt-12 flex justify-between text-lg">{listItems}</dl>
  );
}

export default TextSplash;
