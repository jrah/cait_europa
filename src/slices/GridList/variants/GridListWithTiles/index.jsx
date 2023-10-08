import React from "react"
import styles from "./index.module.scss";
import { PrismicRichText, PrismicLink, PrismicImage } from "@prismicio/react";
import clsx from "clsx";
const VariationGridListWithTiles = ({ primary, items }) => {
    const { heading, sub_heading } = primary
    return (
        <div className="container">
            <div className={styles.layout}>
                <div className={styles.heading}>
                    <PrismicRichText field={heading} components={{
                        heading2: ({ children }) => (
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{children}</h2>
                        )
                    }} />
                    <PrismicRichText field={sub_heading} components={{
                        paragraph: ({ children }) => (
                            <p className="mt-6 paragraph-heading">{children}</p>
                        )
                    }} />
                </div>
                <List items={items} />
            </div>
        </div>
    )
}

function List({ items }) {
    const listItems = items.map((item, index) => {
        const { image, heading, description, tile_link } = item
        return (
            <PrismicLink field={tile_link} key={index} className={`${index}-item relative isolate`}>
                <div className="z-50 relative pt-72 px-4 pb-6">
                    <PrismicRichText field={heading} components={{
                        heading3: ({ children }) => (
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{children}</h3>
                        )
                    }} />
                    <PrismicRichText field={description} components={{
                        paragraph: ({ children }) => (
                            <p className="mt-3 max-w-2xl text-base leading-8 mx-auto text-white">{children}</p>
                        )
                    }} />
                </div>
                <div className="bg-gradient-to-t from-gray-900 to-transparent  h-full w-full absolute inset-0 z-0"></div>
                <PrismicImage field={image} className="absolute inset-0 -z-10 h-full w-full object-cover" />
            </PrismicLink>
        );
    });
    return (
        <div className={styles["list-layout"]}>{listItems}</div>
    )
}




export default VariationGridListWithTiles