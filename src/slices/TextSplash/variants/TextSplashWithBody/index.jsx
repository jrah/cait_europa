import React from "react"
import styles from "./index.module.scss";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next'
import clsx from "clsx";
import { PrismicLink } from "@prismicio/react";

const VariationTextSplashWithBody = ({ primary, items }) => {
    return (
        <div className={clsx(styles.container, "container mx-auto")}>
            <div className={styles["two-column"]}>
                <PrismicNextImage field={primary.image} width={384}
                    height={384} className={styles.image}
                    imgixParams={{ fit: "crop", w: 384, h: 384 }} unoptimized={true} fallbackAlt="" />
                <div>

                    <div className={styles["heading-variant-default"]}>
                        <PrismicRichText field={primary.heading} components={{
                            heading2: ({ children }) => (
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800">
                                    {children}
                                </h2>
                            ),
                        }} />
                    </div>
                    <PrismicRichText
                        field={primary.sub_heading}
                        components={{
                            paragraph: ({ children }) => (
                                <p className="mt-6 text-2xl	 font-light leading-relaxed tracking-tight text-slate-700">
                                    {children}
                                </p>
                            ),
                        }}
                    />
                    <PrismicRichText
                        field={primary.body}
                        components={{
                            list: ({ children }) => (
                                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2">
                                    {children}
                                </ul>
                            ),
                            listItem: ({ children }) => (
                                <li className="flex gap-x-3">
                                    <svg className="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                                    </svg>{children}
                                </li>
                            ),
                        }}
                    />
                    <div>{listButtons(items)}</div>

                </div>
            </div>
        </div>
    )
}

function listButtons(buttons) {
    if (!buttons) return null;
    const filterButtonsWithText = buttons.filter(button => button.button_text !== null)
    return filterButtonsWithText.map((button, index) => {
        const { button_text, button_link } = button
        return (
            <PrismicLink
                field={button_link}
                className={clsx("button-alternate", styles.button, styles["button-alternate"])}
                key={index}
            >
                {button_text} →
            </PrismicLink>
        );
    })
}

export default VariationTextSplashWithBody