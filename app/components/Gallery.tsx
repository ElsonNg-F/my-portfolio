"use client"

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link';
import { FaFigma, FaUnity } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiMongodb, SiCplusplus, SiCsharp, SiPython } from "react-icons/si";

const numOfSlides = 4;
const animation = { duration: 3000 * numOfSlides, easing: (t: number) => t }

export default function Gallery() {

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            renderMode: "performance",
            drag: true,
            slides: { perView: 3 },
            created(s) {
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
        }
    )

    return (
        <div className="mx-auto w-full xl:w-1/2 ">
            <div ref={sliderRef} className="keen-slider h-24">
                <div className="keen-slider__slide flex justify-center items-center"><SiCplusplus className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><SiCsharp className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><SiFirebase className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><FaUnity className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><SiFlutter className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><FaFigma className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><SiMongodb className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
                <div className="keen-slider__slide flex justify-center items-center"><SiPython className="w-8 h-8 drop-shadow-2xl shadow-black" /></div>
            </div>
        </div>
    )
}