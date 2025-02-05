import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filibit software | Showcase",
    description: "Showcase of projects done by the company",
};

export default function Showcase() {
    return (
        <>
            <div className="px-2 md:px-4">
                <h1 className="h1 text-center mt-8 mb-8">Showcase</h1>
                <div className="col gap-6">
                    <div className="border-1px round-1 overflow-no hue-d chroma-bg-2">
                        <h2 className="m-0 my-2 h3 row align-center px-2 w-100%">
                            Oxiris CSS
                        </h2>
                        <div className="col md:row gap-3 md:gap-2 align-start my-2 px-2">
                            <div>
                                <p className="m-0 mb-2">
                                    A CSS framework for building nice GUIs fast.
                                </p>
                                <p className="my-2">
                                    Wide set of utility and component classes
                                    are available for a good developer
                                    experience and consistency with design
                                    language.
                                </p>
                            </div>
                            <div className="max-w-span-5 md:max-w-span-4 row border-1px align-center justify-center round-1 overflow-no">
                                <img
                                    src="/oxiris-css-preview.png"
                                    className="w-100% filter-low hover:filter-no"
                                    alt="Screenshot of a design done with Oxiris CSS"
                                />
                            </div>
                        </div>
                        <div className="row flex-wrap px-2 pb-2 pt-2 md:pt-0">
                            <a
                                href="https://oxiris.filibit.com"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; Documentation
                            </a>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no hue-d chroma-bg-2">
                        <h2 className="m-0 h-span-1 h3 row align-center px-2 w-100%">
                            JSON type generator
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                A developer tool for generating Typescript type
                                from JSON.
                            </p>
                        </div>
                        <div className="row px-2 pb-2 pt-2 md:pt-0 gap-1">
                            <a
                                href="https://filibit.dev/jsontypegen"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; App
                            </a>
                            <a
                                href="https://github.com/filiBit/jsontypegen"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; Repository
                            </a>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no hue-d chroma-bg-2">
                        <h2 className="m-0 h-span-1 h3 row align-center px-2 w-100%">
                            must-be-valid.js
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                Another developer tool for runtime data
                                validation written in Typescript.
                            </p>
                        </div>
                        <div className="row px-2 pb-2 pt-2 md:pt-0 gap-1">
                            <a
                                href="https://github.com/filiBit/must-be-valid"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; Repository
                            </a>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no hue-d chroma-bg-2">
                        <h2 className="m-0 h-span-1 h3 row align-center px-2 w-100%">
                            Subvent
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                Yet another developer tool for managing event
                                subscriptions in DOM with Javascript.
                            </p>
                        </div>
                        <div className="row px-2 pb-2 pt-2 md:pt-0 gap-1">
                            <a
                                href="https://github.com/filiBit/subvent"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; Repository
                            </a>
                        </div>
                    </div>
                    <div className="border-1px round-1 align-start overflow-no hue-d chroma-bg-2">
                        <h2 className="m-0 my-2 h3 row align-center px-2 w-100%">
                            Abstraxo
                        </h2>
                        <div className="col md:row gap-3 md:gap-2 align-start my-2 px-2">
                            <div>
                                <p className="m-0 mb-2">
                                    A Web app for generating mind maps and
                                    visualizing structured information.
                                </p>
                                <p className="my-2">
                                    It supports manual drawing and
                                    auto-generation from different sources, as
                                    well as creating relations between the
                                    nodes.
                                </p>
                            </div>

                            <div className="max-w-span-5 md:max-w-span-4 row border-1px align-center justify-center round-1 overflow-no">
                                <img
                                    src="/abstraxo-preview.png"
                                    className="w-100% filter-low hover:filter-no"
                                    alt="Screenshot of the Abstraxo app"
                                />
                            </div>
                        </div>
                        <div className="row px-2 pb-2 pt-2 md:pt-0">
                            <a
                                href="https://abstraxo.com"
                                className="button var-contained align-self-start h-5 f-size-sm"
                            >
                                &gt; App
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col align-center my-8">
                    <Link
                        href="/contact"
                        className="button var-contained h-6 mt-3 hue-d"
                    >
                        Contact me
                    </Link>
                </div>
            </div>
        </>
    );
}
