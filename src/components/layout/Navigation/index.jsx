'use client'
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PrismicLink, PrismicImage } from "@prismicio/react";
export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { navigationImage, links, backgroundColor } = props;

  if (!links) return null
  const CSSVariableReferenceValue = backgroundColor ? {
    "--navigation-background-color": backgroundColor
  } : {}
  const toggleNavigation = () => {
    setIsOpen(!isOpen)
    document.querySelector(".canvas").classList.toggle("overflow-hidden")
  }
  return (
    <div style={CSSVariableReferenceValue}
      className={styles['background-color']}>
      <div className={clsx("container mx-auto", styles.container)}>
        <PrismicImage field={navigationImage} width="150" height="150"></PrismicImage>
        <div className={clsx([styles.navigation, "container", { [styles['navigation-is-open']]: isOpen }])}>{listlinks(links)}</div>
        <div onClick={toggleNavigation} className={styles["toggle-button"]}>
          <MobileIcon state={isOpen} />
        </div>
      </div>
    </div>
  );
}

const MobileIcon = ({ state }) => {
  const open = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  )
  const close = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  )
  return state ? close : open;
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