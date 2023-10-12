'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const FadeIn = ({ children }) => {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true)
                observer.unobserve(ref.current)
            }
        })
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref])

    return (
        <div ref={ref} className={clsx([styles["before-visible"], { [styles["is-visible"]]: isVisible }])}>
            {children}
        </div>
    )
}

export default FadeIn