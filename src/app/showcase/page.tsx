import Link from "next/link";
import { Metadata } from "next";
import { ShowcaseCard } from "@/components/showcase-card";
import { ExternalLinkIcon } from "@/components/icon/external-link";

export const metadata: Metadata = {
    title: "Filibit software | Showcase",
    description: "Showcase of projects done by the company",
};

export default function Showcase() {
    return (
        <>
            <div className="px-2 md:px-4">
                <h1 className="h1 text-center mt-8 mb-8">Showcase</h1>
                <div className="row flex-wrap gap-4">
                    <ShowcaseCard
                        imageUrls={["showcase/croatia-shuttle.png"]}
                        title="Web solution for a taxi company"
                        description="A taxi company offering private transfers and tours requested a complete rebuild of their old website. We used the latest technology to implement a new and responsive Graphical User Interface, develop client-side logic, integrate the solution with existing API, and improve the search engine rating."
                        tags={[
                            "HTML",
                            "CSS",
                            "SEO",
                            "Typescript",
                            "React",
                            "Next.js",
                            "GraphQL",
                            "DDD architecture",
                        ]}
                    />
                    <ShowcaseCard
                        imageUrls={["showcase/oxiris-css.png"]}
                        title="Visual framework"
                        description="A CSS framework for building nice GUIs (Graphical User Interfaces) fast. Wide set of utility and component classes are available for a good developer experience and consistency with design language."
                        tags={["CSS", "Javascript"]}
                        footerContent={
                            <div className="row flex-wrap p-1 hue-d">
                                <a
                                    href="https://oxiris.filibit.com"
                                    className="button var-contained align-self-start h-5 f-size-sm"
                                    target="_blank"
                                >
                                    Documentation&nbsp;
                                    <ExternalLinkIcon className="h-2 w-2" />
                                </a>
                            </div>
                        }
                    />
                    <ShowcaseCard
                        imageUrls={["showcase/abstraxo.png"]}
                        title="Mind map software"
                        description="A Web software for drawing mind maps and visualizing structured information. It features auto-generation from Wikipedia, adding relations between the nodes, and export / import of mind maps."
                        tags={[
                            "SVG",
                            "Javascript",
                            "Custom framework",
                            "Virtual DOM",
                        ]}
                        footerContent={
                            <div className="row flex-wrap p-1 hue-d">
                                <a
                                    href="https://abstraxo.com"
                                    className="button var-contained align-self-start h-5 f-size-sm"
                                    target="_blank"
                                >
                                    App&nbsp;
                                    <ExternalLinkIcon className="h-2 w-2" />
                                </a>
                            </div>
                        }
                    />
                    <ShowcaseCard
                        imageUrls={["showcase/software-libraries.png"]}
                        title="Software tools"
                        description="Variety of open-source software libraries for improved developer experience."
                        tags={["Javascript", "Typescript"]}
                    />
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
