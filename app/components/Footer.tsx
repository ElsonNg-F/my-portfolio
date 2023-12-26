import FadeInContent from "./FadeInContent";

export default function Footer() {
    return (

        <footer className="sticky top-[100vh] justify-center mx-auto border-t border-gray-100 dark:border-gray-700">
            <FadeInContent moveY={false}>

                <div className="px-4 py-8 text-xs prose dark:prose-invert leading-5">
                    Designed in <span className="font-semibold">Figma. </span>
                    Built with <span className="font-semibold">NextJS</span> and <span className="font-semibold">Sanity</span>.
                    Deployed with <span className="font-semibold">Vercel</span>.
                </div>
            </FadeInContent>

        </footer>

    )
}