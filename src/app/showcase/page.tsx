import Link from "next/link";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filibit software | Showcase",
    description: "Showcase of projects done by the company",
};

export default function Showcase() {
    return (
        <>
            <h1 className={`text-center ${styles.title} m-2 mb-1/2`}>
                Showcase
            </h1>
            <p className="m-2 mt-1/2 text-center">
                A decade of experience in building unique and custom Web
                applications
            </p>

            <div className="m-1 md:m-2">
                <div className="row space-2 wrap">
                    <div className="basis-1/2 md:basis-1/3 grow">
                        <h2 className={`${styles["sub-title"]}`}>Abstraxo</h2>
                        <p>
                            A Web application for generating mind maps and
                            visualizing structured information.
                        </p>
                        <p>
                            It supports manual drawing and auto-generation from
                            different sources, as well as creating relations
                            between the nodes.
                        </p>
                        <ul>
                            <li>
                                App:{" "}
                                <a
                                    href="https://abstraxo.com"
                                    className="break-all"
                                >
                                    https://abstraxo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-1/2 md:basis-1/3 grow">
                        <img
                            src="/abstraxo-preview.png"
                            className="w-full"
                            alt="Screenshot of the Abstraxo app"
                        />
                    </div>
                </div>
            </div>
            <div className="m-1 md:m-2">
                <h2 className={`${styles["sub-title"]}`}>
                    JSON type generator
                </h2>
                <p>
                    A developer tool for generating Typescript type from JSON.
                </p>
                <ul>
                    <li>
                        App:{" "}
                        <a
                            href="https://filibit.dev/jsontypegen"
                            className="break-all"
                        >
                            https://filibit.dev/jsontypegen
                        </a>
                    </li>
                    <li>
                        Code:{" "}
                        <a
                            href="https://github.com/filiBit/jsontypegen"
                            className="break-all"
                        >
                            https://github.com/filiBit/jsontypegen
                        </a>
                    </li>
                </ul>
            </div>
            <div className="m-1 md:m-2">
                <h2 className={`${styles["sub-title"]}`}>must-be-valid.js</h2>
                <p>
                    Another developer tool for runtime data validation written
                    in Typescript
                </p>
                <ul>
                    <li>
                        Code:{" "}
                        <a
                            href="https://github.com/filiBit/must-be-valid"
                            className="break-all"
                        >
                            https://github.com/filiBit/must-be-valid
                        </a>
                    </li>
                </ul>
            </div>
            <div className="m-1 md:m-2">
                <h2 className={`${styles["sub-title"]}`}>Subvent</h2>
                <p>
                    Yet another developer tool for managing event subscriptions
                    in DOM with Javascript.
                </p>
                <ul>
                    <li>
                        Code:{" "}
                        <a
                            href="https://github.com/filiBit/must-be-valid"
                            className="break-all"
                        >
                            https://github.com/filiBit/must-be-valid
                        </a>
                    </li>
                </ul>
            </div>
            <div className="m-1 md:m-2">
                <h2 className={`${styles["sub-title"]}`}>Work experience</h2>
                <p>
                    Over 4 years of professional experience as a Software
                    developer, primarily as a Frontend developer with tendency
                    for Fullstack.
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

            <div className="col align-center m-2">
                <p className="">Do you need a Web application?</p>
                <div></div>
                <Link href="/contact" className="button h-1">
                    Contact me
                </Link>
            </div>
        </>
    );
}
