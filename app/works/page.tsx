import WorkListing, { WorkData } from "../components/WorkListing";
import { client } from "../lib/sanity";

export const revalidate = 1;

async function getWorks() {
    const query = `
    *[_type == "work"] | order(date desc) {
        title,
        subtitle,
        desc,
        date,
        category,
        link,
        videolink,
        _id,
        "imageUrls": images[].asset->url
      }`;

    const data = await client.fetch(query, {next : {revalidate}});
    return data;
}


export default async function Works() {

    const data = await getWorks();

    return (
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-13">
                    Works
                </h1>
            </div>

            <div className="grid gap-y-8 sm:grid-col-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4 pt-8 pb-8">
                {data.map((work: WorkData, index) =>
                    WorkListing(work, index)
                )}
            </div>
        </div>)

}