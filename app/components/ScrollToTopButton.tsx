"use client"

import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

export default function ScrollToTop() {

    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        // update flags based on scroll threshold
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (<motion.button type="button" className="group fixed bottom-0 right-0 p-10 opacity-0" variants={ScrollToTopContainerVariants} animate={controls} onClick={scrollToTop}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} initial="hide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
        <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-2 text-xs whitespace-nowrap text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-16 opacity-0 py-1 m-2 mx-auto">Back To Top</span>
    </motion.button>)
}