import React from "react"
import styles from "./index.module.scss";
import { PrismicRichText, PrismicLink, PrismicImage } from "@prismicio/react";
import clsx from "clsx";
const VariationGridListWithPricing = ({ primary, items }) => {
    const { heading, sub_heading, background_image_top } = primary
    return (
        <div className="container">
            <PrismicImage field={background_image_top} className={styles["background-image"]} fallbackAlt="" />
            <div className="mb-16 text-center">
                <PrismicRichText field={heading} components={{
                    heading2: ({ children }) => (
                        <h2 className="mt-6">{children}</h2>
                    ),
                    paragraph: ({ children }) => (
                        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{children}</p>
                    )
                }} />
                <PrismicRichText field={sub_heading} components={{
                    paragraph: ({ children }) => (
                        <p className="mt-6 max-w-2xl text-lg leading-8 mx-auto">{children}</p>
                    )
                }} />
            </div>
            <List items={items} />
        </div>
    )
}

function List({ items }) {
    const listItems = items.map((item, index) => {
        return (
            <div key={index} className={`${index}-item bg-white rounded-lg p-12 flex flex-col justify-between`}>
                <div>
                    <PrismicRichText field={item.heading} components={{
                        heading3: ({ children }) => (
                            <h3 className="text-base font-semibold leading-7 text-indigo-600">{children}</h3>
                        ),
                    }} />
                    <PrismicRichText field={item.body} components={{
                        heading2: ({ children }) => (
                            <span className="text-5xl font-bold tracking-tight text-gray-900">{children}</span>
                        ),
                        paragraph: ({ children }) => (
                            <p className="mt-3 paragraph-default">
                                {children}
                            </p>
                        ),
                        label: ({ node, children, key }) => {
                            if (node.data.label === "h2-break") {
                                return (
                                    <span
                                        key={key}
                                        className={clsx(styles.h2, "text-gray-900")}
                                    >
                                        {children}
                                    </span>
                                );
                            }
                        },
                        list: ({ children }) => (
                            <ul className="grid gap-y-3 mt-6">
                                {children}
                            </ul>
                        ),
                        listItem: ({ children }) => (
                            <li className="flex items-center gap-x-3">
                                <svg height="12px" width="12px" viewBox="0 0 24 24" className="fill-current h-7 w-5 flex-none text-indigo-500" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path>
                                </svg><span className="paragraph-default">{children}</span>
                            </li>
                        ),
                    }} />
                </div>
                <PrismicLink
                    field={item.button_link}
                    className={"button button-primary mt-12"}
                    key={index}
                >
                    {item.button_text}
                </PrismicLink>

            </div>
        );
    });
    return (
        <div className="mx-auto grid max-w-md grid-cols-1 gap-12 lg:max-w-4xl lg:grid-cols-2">{listItems}</div>
    )
}




export default VariationGridListWithPricing