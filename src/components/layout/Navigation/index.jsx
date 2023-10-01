import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PrismicLink } from "@prismicio/react";
export default function Navigation({ buttons }) {
  if (!buttons) return null
  return (
    <div className={styles['background-color']}>
      <div className={clsx("container mx-auto", styles.container)}>
        <div>{listButtons(buttons)}</div>
      </div>
    </div>
  );
}

function listButtons(buttons) {
  if (!buttons) return null
  return buttons.map((button, index) => {
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