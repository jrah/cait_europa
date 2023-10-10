import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PrismicLink, PrismicImage } from "@prismicio/react";
export default function Navigation(props) {
  const { navigationImage, links, backgroundColor } = props;

  if (!links) return null
  const CSSVariableReferenceValue = backgroundColor ? {
    "--navigation-background-color": backgroundColor
  } : {}
  return (
    <div style={CSSVariableReferenceValue}
      className={styles['background-color']}>
      <div className={clsx("container mx-auto", styles.container)}>
        <PrismicImage field={navigationImage} width="150" height="150"></PrismicImage>
        <div className="flex">{listlinks(links)}</div>
      </div>
    </div>
  );
}

function listlinks(links) {
  const getLinkStyle = (type) => {
    switch (type) {
      case "text":
        return "text-link"
      default:
        return "button-primary"

    }
  }
  if (!links) return null;
  const filterlinksWithText = links.filter(button => button.button_text !== null)
  return filterlinksWithText.map((button, index) => {
    const { button_text, button_link, button_style } = button
    return (
      <PrismicLink
        field={button_link}
        className={clsx(getLinkStyle(button_style), styles.button)}
        key={index}
      >
        {button_text}
      </PrismicLink>
    );
  })
}