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
                <h1 className="text-center h1 mt-8 mb-0">
                    Web solutions that just work
                </h1>
                <p className="mt-1 mb-8 text-center">
                    Exotic software with best qualities
                </p>
                <div className="my-2 md:my-4 row flex-wrap gap-6 md:gap-4 justify-center">
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Languages
                        </h2>
                        <p className="m-0 p-2">Typescript and Javascript </p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Environments
                        </h2>
                        <p className="m-0 p-2">node and deno</p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Frontend
                        </h2>
                        <p className="my-2 px-2">
                            React, Angular 14+, Solid, Next.js
                        </p>
                        <p className="my-2 px-2">Redux, MobX</p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Communication
                        </h2>
                        <p className="m-0 p-2">JSON:API, GraphQL</p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Backend
                        </h2>
                        <p className="m-0 p-2">SQLite, Express.js</p>
                    </div>
                    <div className="w-span-5 grow border-1px round-1 overflow-no hue-d chroma-bg-3">
                        <h2 className="row m-0 align-center justify-center h3 text-center h-span-1">
                            Code
                        </h2>
                        <p className="m-0 p-2">
                            Adherence with coding practices, design principles
                            and patterns.
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
