import { client } from "../lib/sanity";
import Image from "next/image";

export const revalidate = 1;

interface ProjectData {
    title: string,
    overview: string,
    link: string,
    _id: string,
    imageUrl: string,
}

async function getProjects() {
    const query = `
    *[_type == "project"] {
        title,
        overview,
        link,
        _id,
        "imageUrl": image.asset->url
      }`;

    const data = await client.fetch(query, { next: { revalidate } });
    return data;
}

export default async function Projects() {

    const data = await getProjects();

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-13">Projects</h1>
            </div>
            {/* <div>
            <p className="mt-4 text-normal">Stay tuned.</p>
            </div> */}
            <div className="grid gap-y-8 sm:grid-col-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                {data.map((project) => (
                    <article key={project._id} className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-teal-900 shadow-black-100">
                        <div className="h-56 w-full relative">
                            <Image fill src={project.imageUrl} alt="Project Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {project.overview}
                            </p>

                            <a href={project.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                                Read More
                                <span className="block transition-all group-hover:ms-0.5">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}