import * as React from "react";
import styles from "./index.module.scss";
import { clsx } from "clsx";
import { PrismicImage } from "@prismicio/react";
export default function Footer({ ...props }) {
  const { notice, navigationImage } = props;
  return (
    <div className={clsx("container py-12", styles.frame)}>
      <span className={styles.notice}> {notice}</span>
      <PrismicImage field={navigationImage} width="150" height="150" />

    </div>
  );
}
