"use server"


export interface EducationData {
    title: string,
    desc: string,
    yearstart : Date,
    yearend :  Date,
    present: boolean,
    tags: string[],
    link: string,
    _id: string,
    imageUrl: string,
}

function getDate(yearStart : Date, yearEnd : Date, present : boolean) {
    
    return new Date(yearStart).getFullYear().toString() + " - " + (present ? "Present" : new Date(yearEnd).getFullYear().toString());
}

export default async function EducationListing(data: EducationData) {

    const date = getDate(data.yearstart, data.yearend, data.present);

    return (
        <div className="space-x-0 space-y-2 align-top xl:items-top xl:space-x-6 xl:space-y-0 xl:flex xl:flex-row">

            <div className="xl:basis-1/5 text-l font-semibold whitespace-nowrap align-top">
                {date}
            </div>
            <div className="xl:basis-4/5">
                <div className="text-xl font-semibold text-teal-500 dark:text-teal-400 align-top mt-0.5 mb-2">{data.title}</div>
                <p className="leading-7 tracking-tight">{data.desc}</p>
            </div>
        </div>
    )
}