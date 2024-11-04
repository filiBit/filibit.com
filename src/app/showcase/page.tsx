import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filibit software | Showcase",
    description: "Showcase of projects done by the company",
};

export default function Showcase() {
    return (
        <>
            <div className="row align-center h-6 px-2 fg-$bg tab-bar">
                &gt; Showcase
            </div>
            <div className="px-2 md:px-4">
                <h1 className="h1 text-center mt-8 mb-0">Showcase</h1>
                <p className="mb-8 mt-1 text-center">
                    A decade of experience in building unique and custom Web
                    applications
                </p>
                <div className="col">
                    <div className="my-4 col md:row gap-3 align-start">
                        <div className="md:x-span-3 grow">
                            <h2 className="h2">Abstraxo</h2>
                            <p>
                                A Web application for generating mind maps and
                                visualizing structured information.
                            </p>
                            <p>
                                It supports manual drawing and auto-generation
                                from different sources, as well as creating
                                relations between the nodes.
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
                        <div className="max-x-span-4 w-100% grow row border-1px mx-1 sm:mx-2 md:mx-0 align-center justify-center round-1 overflow-no">
                            <img
                                src="/abstraxo-preview.png"
                                className="w-100% filter-low hover:filter-no"
                                alt="Screenshot of the Abstraxo app"
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <h2 className="h2">JSON type generator</h2>
                        <p>
                            A developer tool for generating Typescript type from
                            JSON.
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
                    <div className="my-4">
                        <h2 className="h2">must-be-valid.js</h2>
                        <p>
                            Another developer tool for runtime data validation
                            written in Typescript
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
                    <div className="my-4">
                        <h2 className="h2">Subvent</h2>
                        <p>
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
                    <div className="my-4">
                        <h2 className="h2">Work experience</h2>
                        <p>
                            Over 4 years of professional experience as a
                            Software developer, primarily as a Frontend
                            developer with tendency for Fullstack.
                        </p>
                        <p>My tech stack includes:</p>
                        <ul>
                            <li>HTML and CSS</li>
                            <li>Javascript and Typescript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Solid</li>
                            <li>Next.js</li>
                            <li>GraphQl</li>
                            <li>JSON:API</li>
                            <li>MongoDb</li>
                        </ul>
                    </div>

                    <div className="col align-center my-8">
                        <p className="m-0">Do you need a Web application?</p>
                        <div></div>
                        <Link href="/contact" className="button h-6 mt-3">
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
