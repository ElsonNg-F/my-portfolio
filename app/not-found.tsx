import Link from "next/link";

export default function NotFound() {

    return (
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-13">
                    Oops!
                </h1>
            </div>
            <div>
                <p className="mt-4 text-normal">The page you are looking for does not exist. Return to <Link href="/" className="underline text-teal-500"><span className="">home</span></Link>.</p>
            </div>
        </div>)
}