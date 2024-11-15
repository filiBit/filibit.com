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
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Aesthetic
                        </h2>
                        <p className="m-0 p-2">
                            Beautiful, intuitive and readable. A user interface
                            with traits that can be measured objectively.
                        </p>
                    </div>
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Fast
                        </h2>
                        <p className="m-0 p-2">
                            Smart optimizations from initial load time and data
                            access, to SEO (Search Engine Optimization).
                        </p>
                    </div>
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Robust
                        </h2>
                        <p className="m-0 p-2">
                            System redundancy with automated database backups,
                            implemented fail-safes, and monitoring.
                        </p>
                    </div>
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Secure
                        </h2>
                        <p className="m-0 p-2">
                            Industry standards and common-sense security
                            practices. Authorization, data encryption and user
                            permision controls to name a few.
                        </p>
                    </div>
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Maintainable
                        </h2>
                        <p className="m-0 p-2">
                            Adherence to good coding practices, design
                            principles and patterns.
                        </p>
                    </div>
                    <div className="x-span-5 grow border-1px round-1 overflow-no">
                        <h2 className="row m-0 align-center justify-center h3 text-center tab-bar y-span-1">
                            Legal
                        </h2>
                        <p className="m-0 p-2">
                            Compliance with internet laws and standards. These
                            include GDPR, FTCA, WCAG and WAI-ARIA.
                        </p>
                    </div>
                </div>
                <div className="col align-center mt-8 mb-8">
                    <Link href="/contact" className="button h-6">
                        Contact me
                    </Link>
                </div>
            </div>
        </>
    );
}
