import React from "react";
import { PrismicImage } from "@prismicio/react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PrismicLink } from "@prismicio/react";
export interface INavigationProps {
  navigation_image: object;
  buttons: Array<[]>;
}

export default function Navigation(props: INavigationProps) {
  const listItems = props.buttons.map((button, index) => {
    const { button_text, button_link } = button;
    return (
      <PrismicLink
        field={button_link}
        className={clsx("button-primary", styles.button)}
        key={index}
      >
        {button_text}
      </PrismicLink>
    );
  });
  return (
    <div className={clsx("container", styles.container)}>
      <PrismicImage field={props} width="150" height="150"></PrismicImage>
      <div>{listItems}</div>
    </div>
  );
}
