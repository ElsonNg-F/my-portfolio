"use server"

import Link from "next/link";
import FadeInContent from "./FadeInContent";


export interface EducationData {
    title: string,
    subtitle : string,
    desc: string,
    yearstart: Date,
    yearend: Date,
    present: boolean,
    tags: string[],
    link: string,
    _id: string,
    imageUrl: string,
}

function getDate(yearStart: Date, yearEnd: Date, present: boolean) {

    return new Date(yearStart).getFullYear().toString() + " - " + (present ? "Present" : new Date(yearEnd).getFullYear().toString());
}

export default async function EducationListing(data: EducationData, index) {

    const date = getDate(data.yearstart, data.yearend, data.present);

    var internal = (
        <FadeInContent delayOffset={index * 0.05}>
            <div className="group space-x-0 space-y-2 py-4 align-top xl:items-top xl:space-x-6 xl:space-y-0 xl:flex xl:flex-row">


                <div className="xl:basis-1/6 text-base text-left font-semibold whitespace-nowrap align-top">
                    {date}
                </div>
                <div className="xl:basis-5/6">
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-lg font-semibold text-teal-500 dark:text-teal-400 align-top">{data.title}</div>
                        {
                            data.link == null ? <div /> : <div className="align-text-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2 group-hover:w-4 group-hover:h-4 group-hover:transform group-hover:duration-250 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        }

                    </div>
                    <p className="text-base font-normal leading-7 tracking-tight mt-0">{data.subtitle}</p>
                    <p className="text-base font-normal leading-7 tracking-tight mt-4">{data.desc}</p>
                </div>
            </div>
        </FadeInContent>
    );

    return data.link == null ? internal : (
        <Link className="no-underline" href={data.link} target="_blank">
            {internal}
        </Link>
    )

/*     return (
        <div className="space-x-0 space-y-2 align-top xl:items-top xl:space-x-6 xl:space-y-0 xl:flex xl:flex-row">

            <div className="xl:basis-1/5 text-l font-semibold whitespace-nowrap align-top">
                {date}
            </div>
            <div className="xl:basis-4/5">
                <div className="text-xl font-semibold text-teal-500 dark:text-teal-400 align-top mt-0.5 mb-2">{data.title}</div>
                <p className="leading-7 tracking-tight">{data.desc}</p>
            </div>
        </div>
    ) */
}