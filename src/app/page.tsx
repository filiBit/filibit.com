import { HomeCard } from "@/components/home-card";
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
                <h1 className="text-center h1 mt-8 mb-8">
                    5 years of building digital products
                </h1>
                <div className="row flex-wrap gap-4 mb-8">
                    <HomeCard
                        title="Web solutions"
                        description="Building aesthetic and optimized user interfaces"
                        tags={["SEO", "Accessibility", "Responsive design"]}
                    />
                    <HomeCard
                        title="Server"
                        description="Running your business logic and automating tasks"
                        tags={["APIs", "REST", "GraphQL"]}
                    />
                    <HomeCard
                        title="Database"
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
                <div className="row flex-wrap justify-center gap-2 md:gap-4 align-center mt-8 mb-8 border-1px round-1 py-6 px-2 chroma-bg-2 hue-d">
                    <Link
                        href="/showcase"
                        className="button var-contained w-span-4 h-6 chroma-bg-0"
                    >
                        Explore showcase
                    </Link>
                    <Link
                        href="/contact"
                        className="button var-contained w-span-4 h-6 chroma-bg-0"
                    >
                        Contact me
                    </Link>
                </div>
                <div className="row flex-wrap gap-4 mb-8">
                    <div className="w-span-6 grow shrink">
                        <h2 className="h2">
                            Tech stack&nbsp;
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
                            * Software frameworks and other tools are not listed
                            here since I know many and can quickly adapt to any
                            one due to experience and a solid engineering
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
