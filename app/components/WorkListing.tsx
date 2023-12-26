import Image from "next/image";
import Link from "next/link";
import FadeInContent from "./FadeInContent";

export interface WorkData {
    title: string,
    subtitle: string,
    desc: string,
    date: Date,
    category: string[],
    imageUrls: string[],
    link: string,
    videolink: string,
    _id: string,
}


export default function WorkListing(work: WorkData, index) {
    return (
        <Link key={work._id} href={work.link} target="_blank">
            <FadeInContent delayOffset={index * 0.05}>
            <article className="group overflow-hidden dark:border-zinc-600 rounded-xl border border-gray-100 bg-white shadow-lg  dark:bg-black dark:shadow-teal-950 shadow-black-100">
                <div className="h-32 w-full relative bg-white">
                    <Image fill src={work.imageUrls[0]} alt="Project Image" className="w-full h-full object-cover" />
                </div>


                <div className="p-4 sm:p-6">
                    <div className="flex flex-row items-center space-x-2">
                        <h3 className="text-normal font-semibold text-gray-900 dark:text-white">
                            {work.title}
                        </h3>
                        {
                            work.link == null ? <div /> : <div className="align-text-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 xl:w-2 xl:h-2 xl:group-hover:w-4 xl:group-hover:h-4 xl:group-hover:transform xl:group-hover:duration-250 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        }

                    </div>
                    <p className="mt-0 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {work.subtitle}
                    </p>
                    <p className="line-clamp-1 mt-1 text-sm leading-relaxed text-gray-900 dark:text-gray-300">
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(new Date(work.date))}
                    </p>
                </div>
            </article>
            </FadeInContent>
        </Link>
    )
}