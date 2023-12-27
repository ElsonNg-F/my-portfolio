import Image from 'next/image'
import ProfilePic from "@/public/profilepicture.jpg"
import FadeInContent from './components/FadeInContent'
import Gallery from './components/Gallery';
import { client } from './lib/sanity'

export const revalidate = 1;
interface InfoData {
  property: string,
  info: string,
}


async function getInfo() {
  const query = `
  *[_type == "info" && property=="welcome"] {
      property,
      info,
      _id,
  }`;
  const data = await client.fetch(query, { next: { revalidate } });
  return data;
}


export default async function Home() {

  const info: InfoData[] = await getInfo();

  return (
    <div className="overflow-hidden align-center items-center">
      {/* <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-13">
          Home
        </h1>
      </div> */}
      <div className="pt-24 flex flex-col justify-center items-center">
        <FadeInContent>
          <div className="flex flex-col items-center pt-8">
            <Image alt="Profile Picture" src={ProfilePic} className="h-32 w-32 rounded-full object-cover object-top" />
            <h3 className="pt-4 pb-2 text-center text-2xl font-bold leading-8 tracking-tight">
              Ng Yuan Da Elson<br />
            </h3>
            <p>Freelance App/Software Developer</p>
          </div>
        </FadeInContent>


        {/* From typography plugin */}
        <div className="flex justify-center w-fit prose max-w-none prose-lg mt-6 pb-7 dark:prose-invert xl:col-span-0">
          <FadeInContent>
            <div className="p-4 mx-4 rounded-xl bg-gray-100 dark:bg-teal-950 dark:text-white text-center">
              {/* Currently open to new opportunities!🔥 */}
              {info.find(i => i?.property.toLowerCase() == "welcome")?.info}
            </div>
            {/* <p>
              Hi! I&apos;m Elson, a software enthusiast with an eye for design. I am always looking for the &quot;next big thing&quot; as I live and breathe tech, trying out new technologies that can revolutionize the industry standard. I would love to be your go-to man when it comes to web and app development.
            </p>
            <Typewriter text="Hello, World!" />
            <div className="flex items-center justify-center lg:justify-start mt-12 mb-20 xl:mb-0">
              <div className="flex items-center absolute mt-1 p-6 font-medium h-7 bg-white border-teal-400 border-x-2 border-y-2 text-teal-500 dark:bg-black dark:text-neutral-100 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <div className="ml-2">Available for Hire</div>
              </div>
            </div> */}
          </FadeInContent>
        </div>
      </div>
      <FadeInContent>
        <div className="mb-8">
          <Gallery />
        </div>
      </FadeInContent>
    </div>

  )
}
