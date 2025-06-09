import { HomeCard } from "@/components/home-card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Filibit software",
    description: "Building a custom Web solution for your business",
};

export default function Home() {
    return (
        <>
            <div className="px-2 md:px-4">
                <div className="border-bttom-2px hue- -bg-2">
                    <div className="col gap-6 mt-14 mb-20 sm:mt-18 sm:mb-26 max-w-span-11 mx-auto hue-neutral">
                        <h1 className="h1 m-0 f-size-xl sm:f-size-2xl md:f-size-3xl max-w-span-5 md:max-w-span-6 hue-d">
                            5 years of building&nbsp;digital products
                        </h1>
                        <div className="align-self-end lh-2 text-end max-w-span-10 text-right">
                            Improving businesses by following{" "}
                            <span className="hue-d px-1 chroma-bg-2 text-underline ">
                                Industry Standards
                            </span>{" "}
                            to&nbsp;develop{" "}
                            <span className="hue-d px-1 chroma-bg-2">
                                Software Solutions
                            </span>{" "}
                            and{" "}
                            <span className="hue-d px-1 chroma-bg-2">
                                Web Applications
                            </span>
                        </div>
                    </div>
                </div>
                <h2 className="md:text-center h2 mb-6">The process</h2>
                <div className="col gap-4 xl:gap-6">
                    <div className="row xl:col gap-2 max-w-span-6 xl:max-w-span-16 w-100% mx-auto">
                        <div className="col xl:row pt-0 h-span-7 xl:h-4 pb-8 xl:pb-0 xl:pt-0 xl:px-15">
                            <div className="w-4 h-4 hue-b chroma-bg-2 round-2 border-2px scale-2"></div>
                            <div className="grow border-right-2px w-2 xl:h-2 xl:border-right-0 xl:border-bottom-2px"></div>
                            <div className="w-4 h-4 hue-a chroma-bg-2 border-2px round-2"></div>
                            <div className="grow border-right-2px w-2 xl:h-2 xl:border-right-0 xl:border-bottom-2px"></div>
                            <div className="w-4 h-4 hue-d chroma-bg-2 border-2px round-2"></div>
                        </div>
                        <div className="xl:row justify-between f-size-md lh-1.5">
                            <div className="h-span-3 xl:h-auto xl:w-span-4 col gap-2">
                                <div className="xl:text-center f-size-sm md:f-size-md">
                                    Information gathering
                                </div>
                                <div className="border-1px py-1 px-2 round-1 chroma-bg-3">
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
                                <div className="border-1px py-1 px-2 round-1 chroma-bg-3">
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
                                <div className="border-1px py-1 px-2 round-1 chroma-bg-3">
                                    <div className="f-size-sm">
                                        Deployment, bug fixes and feature
                                        updates
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-span-11 mx-auto align-self-center w-100%">
                        <div className="max-w-span-10">
                            You will be guided through every step. We
                            communicate transparently and welcome your
                            questions.
                        </div>
                    </div>
                </div>
                <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center my-16 sm:my-20 border-1px round-1 py-6 px-2 chroma-bg-2 hue-d">
                    <Link
                        href="/showcase"
                        className="button var-contained w-100% max-w-span-4 h-6 chroma-bg-0"
                    >
                        Explore showcase
                    </Link>
                    <Link
                        href="/contact"
                        className="button var-contained w-100% max-w-span-4 h-6 chroma-bg-0"
                    >
                        Contact
                    </Link>
                </div>
                <h2 className="h2 mt-16 mb-6 text-center">Our skills</h2>
                <div className="row flex-wrap gap-4 mb-8">
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
                        title="Expertise"
                        description="Creating a maintainable software that follows industry standards for code and infrastructure"
                        tags={[
                            "design patterns",
                            "design principles",
                            "DDD architecture",
                        ]}
                    />
                </div>
                {/* <div className="my-16 sm:my-20">
                    <h2 className="h2 mb-6 text-center">Testimonials</h2>
                    <div className="col gap-4 align-center">
                        <Testimonial
                            name="Ivan Knezović"
                            companyName="Transfer Me Dalmatia"
                            quote="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
                        />
                        <Link href="/showcase" className="link px-2 py-1">
                            See more
                        </Link>
                    </div>
                </div> */}
                <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center my-16 sm:my-20 border-1px round-1 py-6 px-2 chroma-bg-2 hue-d">
                    <Link
                        href="/showcase"
                        className="button var-contained max-w-span-4 w-100% h-6 chroma-bg-0"
                    >
                        Explore showcase
                    </Link>
                    <Link
                        href="/contact"
                        className="button var-contained max-w-span-4 w-100% h-6 chroma-bg-0"
                    >
                        Contact
                    </Link>
                </div>
                <div className="row flex-wrap gap-4 mb-16 sm:mb-20">
                    <div className="w-span-6 grow shrink">
                        <h2 className="h2">
                            Tech stack{" "}
                            <span className="hue-b chroma-bg-2">*</span>
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
                        <p className="mt-2 mb-0 p-1 hue-b f-size-sm chroma-bg-2">
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
        </>
    );
}
