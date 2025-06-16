import { HomeCard } from "@/components/home-card";
import { CodeBoxIcon } from "@/components/icon/code-box";
import { Testimonial } from "@/components/testimonial";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Filibit software",
    description: "Building a custom Web solution for your business",
};

export default function Home() {
    return (
        <>
            <div className="px-2 sm:px-4 md:px-6 pt-4 pb-4 sm:pt-6 sm:pb-6 mb-16 chroma-fg-1 hue-d chroma-bg-3">
                <div className="col gap-4 sm:gap-6">
                    <div className="row gap-4 justify-between flex-wrap">
                        <h1 className="h1 m-0 f-size-xl md:f-size-2xl lg:f-size-3xl f-weight-2xl">
                            5 years of building
                            <br />
                            digital products
                        </h1>
                        <CodeBoxIcon className="w-auto h-12 lg:h-14 m-1 hue-" />
                    </div>
                    <div className="lh-2 text-end f-weight-lg f-size-sm sm:f-weight-md sm:f-weight-md sm:f-size-md lg:f-size-lg hue-">
                        Improving businesses, automating repetitive tasks,
                        developing Web Solutions and following Industry
                        Standards.
                    </div>
                    <div className="row w-100% gap-2 flex-wrap hue-">
                        <Link
                            href="/showcase"
                            className="button var-containe grow sm:grow-0 w-28 sm:w-auto align-self-start"
                        >
                            Explore showcase
                        </Link>
                        <Link
                            href="/contact"
                            className="button var-contained grow sm:grow-0 w-28 sm:w-auto align-self-start"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-2 sm:px-4 md:px-6">
                <h2 className="md:text-center h2 mb-6 mt-0">The process</h2>
                <div className="col gap-6 xl:gap-8">
                    <div className="row xl:col gap-2 max-w-span-6 xl:max-w-span-16 w-100% mx-auto">
                        <div className="col xl:row pt-0 h-span-7 xl:h-6 pb-8 xl:pb-0 xl:pt-2 xl:px-15">
                            <div className="w-4 h-4 hue-d chroma-bg-3 round-2 border-2px scale-2"></div>
                            <div className="grow border-right-2px w-2 xl:h-2 xl:border-right-0 xl:border-bottom-2px"></div>
                            <div className="w-4 h-4 hue-d chroma-bg-3 border-2px round-2"></div>
                            <div className="grow border-right-2px w-2 xl:h-2 xl:border-right-0 xl:border-bottom-2px"></div>
                            <div className="w-4 h-4 hue-d chroma-bg-3 border-2px round-2"></div>
                        </div>
                        <div className="xl:row justify-between f-size-md lh-1.5">
                            <div className="h-span-3 xl:h-auto xl:w-span-4 col gap-2">
                                <div className="xl:text-center f-size-sm md:f-size-md">
                                    Information gathering
                                </div>
                                <div className="border-1p py-1 px-2 round-1 chroma-bg-3">
                                    <div className="f-size-sm">
                                        Initial Conversations, proposals and
                                        planning
                                    </div>
                                </div>
                            </div>
                            <div className="h-span-3 xl:h-auto xl:w-span-4 col gap-2">
                                <div className="xl:text-center f-size-sm md:f-size-md">
                                    Development
                                </div>
                                <div className="border-1p py-1 px-2 round-1 chroma-bg-3">
                                    <div className="f-size-sm">
                                        Iterative progress and testing to ensure
                                        the product is bug-free
                                    </div>
                                </div>
                            </div>
                            <div className="h-span-3 xl:h-auto xl:w-span-4 col gap-2">
                                <div className="xl:text-center f-size-sm md:f-size-md">
                                    Launch & Support
                                </div>
                                <div className="border-1p py-1 px-2 round-1 chroma-bg-3">
                                    <div className="f-size-sm">
                                        Deployment, bug fixes and feature
                                        updates
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-span-6">
                        You will be guided through every step. We communicate
                        transparently and welcome your questions.
                    </div>
                </div>
                <h2 className="h2 mt-16 mb-6 text-center">Our skills</h2>
                <div className="row flex-wrap gap-2 md:gap-3">
                    <HomeCard
                        title="Frontend"
                        description="Building interactive and aesthetic user interfaces optimized for speed"
                        tags={["SEO", "Accessibility", "Responsive design"]}
                    />
                    <HomeCard
                        title="Backend"
                        description="Managing servers that run your business logic and automate tasks"
                        tags={["APIs", "REST", "GraphQL"]}
                    />
                    <HomeCard
                        title="Data"
                        description="Supporting data needs of your business with apropriate database design and physical implementation"
                        tags={["Database design", "Relational model"]}
                    />
                    <HomeCard
                        title="Common sense"
                        description="Creating a maintainable software that follows industry standards for code and infrastructure"
                        tags={[
                            "design patterns",
                            "design principles",
                            "DDD architecture",
                        ]}
                    />
                </div>
            </div>
            <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center my-16 py-6 px-2 chroma-bg-3 hue-d">
                <Link
                    href="/contact"
                    className="button var-contained w-100% max-w-span-4 h-6 chroma-bg-0"
                >
                    Contact us
                </Link>
                <Link
                    href="/showcase"
                    className="button chroma-bg-3 w-100% max-w-span-4 h-6 chroma-bg-0"
                >
                    Explore showcase
                </Link>
            </div>
            <div className="px-2 sm:px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="h2 mb-8 text-center">Testimonials</h2>
                    <div className="col gap-4 align-center">
                        <Testimonial
                            name="Ivan Knezović"
                            companyName="Croatia Shuttle Service"
                            quote="We needed our website to make a stronger visual impact and get its content up-to-date. Filibit delivered everything on time, guided us through every decision, and exceeded our expectations. We highly recommend Filibit."
                        />
                        <Link href="/showcase" className="link px-2 py-1">
                            See more
                        </Link>
                    </div>
                </div>
                <div className="row flex-wrap gap-4">
                    <div className="w-span-6 grow shrink">
                        <h2 className="h2">
                            Tech stack{" "}
                            <span className="hue-b chroma-bg-3">*</span>
                        </h2>

                        <div className="col gap-2">
                            <div className="border-1px p-1">HTML, CSS</div>
                            <div className="border-1px p-1">
                                Javascript, Typescript, JSDoc
                            </div>
                            <div className="border-1px p-1">node, deno</div>
                            <div className="border-1px p-1">
                                SQL, GraphQL, JSON:API
                            </div>
                            <div className="border-1px p-1">SQLite</div>
                        </div>
                        <p className="mt-2 mb-0 p-1 hue-b f-size-sm chroma-bg-3">
                            * Software frameworks and other specific tools are
                            not listed here since we know many and can quickly
                            adapt due to experience and a solid engineering
                            foundation
                        </p>
                    </div>
                    <div className="w-span-6 grow shrink">
                        <h2 className="h2">Practices</h2>

                        <div className="col gap-2">
                            <div className="border-1px p-1">
                                Software design principles and patterns
                            </div>
                            <div className="border-1px p-1">
                                Domain-Driven Design (DDD) architecture
                            </div>
                            <div className="border-1px p-1">
                                Agile and Waterfall workflows
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center mt-16 py-6 px-2 chroma-bg-3 hue-d">
                <Link
                    href="/contact"
                    className="button var-contained w-100% max-w-span-4 h-6 chroma-bg-0"
                >
                    Contact us
                </Link>
                <Link
                    href="/showcase"
                    className="button chroma-bg-3 w-100% max-w-span-4 h-6 chroma-bg-0"
                >
                    Explore showcase
                </Link>
            </div>
        </>
    );
}
