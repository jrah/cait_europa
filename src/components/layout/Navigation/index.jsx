import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PrismicLink, PrismicImage } from "@prismicio/react";
export default function Navigation(props) {
  const { navigationImage, buttons, backgroundColor } = props;

  if (!buttons) return null
  const CSSVariableReferenceValue = backgroundColor ? {
    "--navigation-background-color": backgroundColor
  } : {}
  return (
    <div style={CSSVariableReferenceValue}
      className={styles['background-color']}>
      <div className={clsx("container mx-auto", styles.container)}>
        <PrismicImage field={navigationImage} width="150" height="150"></PrismicImage>
        <div>{listButtons(buttons)}</div>
      </div>
    </div>
  );
}

function listButtons(buttons) {
  if (!buttons) return null;
  const filterButtonsWithText = buttons.filter(button => button.button_text !== null)
  return filterButtonsWithText.map((button, index) => {
    const { button_text, button_link } = button
    return (
      <PrismicLink
        field={button_link}
        className={clsx("button-primary", styles.button)}
        key={index}
      >
        {button_text}
      </PrismicLink>
    );
  })
}