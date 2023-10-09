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

const CarouselActionNextIcon = (position) => {

    return (
        <div className={styles.next}>
            <div className="relative inline-flex">
                <span className={styles.pulse}>
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-300"></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={0.5} className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" fill="rgb(96 165 250)" stroke="rgb(96 165 250)" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" fill="rgb(191 219 254)" stroke="rgb(191 219 254)" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
            </div>
        </div>
    )
}

function List({ items }) {
    const listItems = items.map((item, index) => {
        const { image, heading, description, tile_link } = item
        return (
            <PrismicLink field={tile_link} key={index} className={styles.tile}>
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
                <PrismicImage field={image} className={clsx(styles.image)} />
            </PrismicLink>
        );
    });
    return (
        <div className={styles["list-layout"]}>{listItems}<PrismicLink> <CarouselActionNextIcon /></PrismicLink></div>
    )
}




export default VariationGridListWithTiles