"use client"

import { Variants, motion, useAnimationControls, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


const FadeInVariants: Variants = {
    hide: { opacity: 0, y: 75 },
    show: { opacity: 1, y: 0 },
};



export default function FadeInContent({children, delayOffset=0.0}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimationControls();

    const FadeInTransition =
    { duration: 0.4, delay: 0.10 + delayOffset}

    useEffect(() => {
        if (isInView)
            controls.start("show");
    }, [isInView, controls]);

    return (
        <div className="">
            <motion.div
                ref={ref}
                variants={FadeInVariants}
                animate={controls}
                initial="hide"
                transition={FadeInTransition}>
                    {children}
            </motion.div>
        </div>)
}