import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Filibit software",
    description: "Web solutions that just work",
};

export default function Home() {
    return (
        <>
            <div className="px-2 md:px-4">
                <h1 className="text-center h1 mt-8 mb-4">Welcome</h1>
                <p>
                    My name is Filip Biterski. I am a Web developer with many
                    years of professional experience in Frontend.
                </p>
                <p>
                    Software is my passion, so my free time is usually spent
                    creating software products and open-source libraries.
                </p>
                <p className="my-8 text-center">Here are some of my skills</p>
                <div className="my-2 md:my-4 row flex-wrap gap-6 md:gap-4 justify-center">
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center my-2 h3 text-center">
                            Languages
                        </h2>
                        <p className="my-3 px-3">
                            Javascript, Typescript, JSDoc
                        </p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row my-2 align-center justify-center h3 text-center">
                            Environments
                        </h2>
                        <p className="my-3 px-3">Browser, node, deno</p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row my-2 align-center justify-center h3 text-center">
                            Frontend
                        </h2>
                        <p className="my-3 px-3">
                            React, Next.js, Angular 14+, Vue, Redux, Webpack,
                            HTML, CSS
                        </p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row my-2 align-center justify-center h3 text-center">
                            Backend
                        </h2>
                        <p className="my-3 px-3">
                            SQL, SQLite, Express.js, JSON:API, GraphQL
                        </p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row my-2 align-center justify-center h3 text-center">
                            Software design
                        </h2>
                        <p className="my-3 px-3">
                            Design principles and design patterns
                        </p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row my-2 align-center justify-center h3 text-center">
                            More
                        </h2>
                        <p className="my-3 px-3">
                            Checkout my CV{" "}
                            <a href="/CV.pdf" className="link">
                                here
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center mt-8 mb-8">
                    <Link
                        href="/showcase"
                        className="button var-contained w-span-4 hue-d h-6"
                    >
                        Explore showcase
                    </Link>
                    <Link
                        href="/contact"
                        className="button var-contained w-span-4 hue-d h-6"
                    >
                        Contact me
                    </Link>
                </div>
            </div>
        </>
    );
}
