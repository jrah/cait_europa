import * as React from "react";
import styles from "./index.module.scss";
import { clsx } from "clsx";
import { PrismicImage } from "@prismicio/react";
export default function Footer({ image, notice }) {
  return (
    <div className={clsx("container py-12", styles.frame)}>
      <PrismicImage field={image} width="150" height="150" />
      <p className={styles.notice}>{notice}</p>
    </div>
  );
}
