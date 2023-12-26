"use client"

import { Variants, motion, useAnimationControls, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


const FadeIn: Variants = {
    hide: { opacity: 0, y: 75 },
    show: { opacity: 1, y: 0 },
};

const FadeInNoMoveY: Variants = {
    hide: { opacity: 0, y: 0 },
    show: { opacity: 1, y: 0 },
};


export default function FadeInContent({children, delayOffset=0.0, moveY=true}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimationControls();

    const FadeInTransition =
    { duration: 0.5, delay: 0.05 + delayOffset}

    useEffect(() => {
        if (isInView)
            controls.start("show");
    }, [isInView, controls]);

    return (
        <div className="">
            <motion.div
                ref={ref}
                variants={moveY ? FadeIn : FadeInNoMoveY}
                animate={controls}
                initial="hide"
                transition={FadeInTransition}>
                    {children}
            </motion.div>
        </div>)
}