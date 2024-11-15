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
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            Oxiris CSS
                        </h2>
                        <div className="col md:row gap-3 md:gap-2 align-start p-2">
                            <div>
                                <p className="m-0 mb-2">
                                    A CSS framework for building nice GUIs fast.
                                </p>
                                <p className="m-0">
                                    Wide set of utility and component classes
                                    are available for a good developer
                                    experience and consistency with design
                                    language.
                                </p>
                                <ul>
                                    <li>
                                        App:{" "}
                                        <a
                                            href="https://github.com/filiBit/oxiris-css"
                                            className="break-all link"
                                        >
                                            https://github.com/filiBit/oxiris-css
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="max-x-span-5 md:max-x-span-4 row border-1px align-center justify-center round-1 overflow-no">
                                <img
                                    src="/oxiris-css-preview.png"
                                    className="w-100% filter-low hover:filter-no"
                                    alt="Screenshot of a design done with Oxiris CSS"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            Abstraxo
                        </h2>
                        <div className="col md:row gap-3 md:gap-2 align-start p-2">
                            <div>
                                <p className="m-0 mb-2">
                                    A Web app for generating mind maps and
                                    visualizing structured information.
                                </p>
                                <p className="m-0">
                                    It supports manual drawing and
                                    auto-generation from different sources, as
                                    well as creating relations between the
                                    nodes.
                                </p>
                                <ul>
                                    <li>
                                        App:{" "}
                                        <a
                                            href="https://abstraxo.com"
                                            className="break-all link"
                                        >
                                            https://abstraxo.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="max-x-span-5 md:max-x-span-4 row border-1px align-center justify-center round-1 overflow-no">
                                <img
                                    src="/abstraxo-preview.png"
                                    className="w-100% filter-low hover:filter-no"
                                    alt="Screenshot of the Abstraxo app"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            JSON type generator
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                A developer tool for generating Typescript type
                                from JSON.
                            </p>
                            <ul>
                                <li>
                                    App:{" "}
                                    <a
                                        href="https://filibit.dev/jsontypegen"
                                        className="break-all link"
                                    >
                                        https://filibit.dev/jsontypegen
                                    </a>
                                </li>
                                <li>
                                    Code:{" "}
                                    <a
                                        href="https://github.com/filiBit/jsontypegen"
                                        className="break-all link"
                                    >
                                        https://github.com/filiBit/jsontypegen
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            must-be-valid.js
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                Another developer tool for runtime data
                                validation written in Typescript.
                            </p>
                            <ul>
                                <li>
                                    Code:{" "}
                                    <a
                                        href="https://github.com/filiBit/must-be-valid"
                                        className="break-all link"
                                    >
                                        https://github.com/filiBit/must-be-valid
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            Subvent
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                Yet another developer tool for managing event
                                subscriptions in DOM with Javascript.
                            </p>
                            <ul>
                                <li>
                                    Code:{" "}
                                    <a
                                        href="https://github.com/filiBit/must-be-valid"
                                        className="break-all link"
                                    >
                                        https://github.com/filiBit/must-be-valid
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-1px round-1 col align-start overflow-no">
                        <h2 className="m-0 y-span-1 h3 row align-center px-2 tab-bar w-100%">
                            Work experience
                        </h2>
                        <div className="col row align-start p-2">
                            <p className="m-0 mb-2">
                                Over 4 years of professional experience as a
                                Software developer, primarily as a Frontend
                                developer with a tendency for Fullstack.
                            </p>
                            <p className="m-0">My tech stack includes:</p>
                            <ul>
                                <li>SQLite</li>
                                <li>JSON:API and GraphQL</li>
                                <li>Next.js, React, Angular and Solid</li>
                                <li>Node and Deno</li>
                                <li>Javascript and Typescript</li>
                                <li>HTML and CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col align-center my-8">
                    <p className="m-0">Do you need a Web app?</p>
                    <div></div>
                    <Link href="/contact" className="button h-6 mt-3">
                        Contact me
                    </Link>
                </div>
            </div>
        </>
    );
}
