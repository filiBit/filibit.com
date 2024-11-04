import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Filibit software",
    description: "Web solutions that just work",
};

export default function Home() {
    return (
        <>
            <div className="row align-center h-6 px-2 fg-$bg tab-bar">
                &gt; Home
            </div>
            <div className="px-2 md:px-4">
                <h1 className="text-center h1 mt-8 mb-0">
                    Web solutions that just work
                </h1>
                <p className="mt-1 mb-8 text-center">
                    A decade of experience in building unique and custom Web
                    applications
                </p>
                <div className="my-2 md:my-4 row flex-wrap gap-2 md:gap-4 justify-center">
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Usable</h2>
                        <p>
                            Intuitive design, readability, and a good user flow
                            are essential for productivity and ease of use of
                            your software.
                        </p>
                        <p>
                            There&apos;s a whole science behind the User
                            Experience (UX) and you will get the best.
                        </p>
                    </div>
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Performant</h2>
                        <p>
                            Fast load time and data access coupled with low
                            operating cost will make the app enjoyable to use
                            and help keep your business operable.
                        </p>
                        <p>
                            I invest significant effort into implementing a
                            cloud infrastructure specifically for your use case.
                        </p>
                    </div>
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Aesthetic</h2>
                        <p>
                            Beauty has objective qualities such as symetry,
                            responsiveness, consistent spacing and other visual
                            patterns.
                        </p>
                        <p>
                            I will apply this knowledge to Graphical User
                            Interface (GUI) of the solution you order.
                        </p>
                    </div>
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Secure</h2>
                        <p>
                            Applying industry standards and common-sense
                            security practices to keep the data of your business
                            and users secure.
                        </p>
                        <p>
                            Good authorization, password hashing, regular
                            backups, etc. will ensure security and robustenss of
                            your system.
                        </p>
                    </div>
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Custom</h2>
                        <p>
                            By familiarizing myself with your business domain, I
                            will design an optimal system while following
                            common-sense coding practices.
                        </p>
                        <p>
                            This will make your software maintainable, unique
                            and tailored to your needs.
                        </p>
                    </div>
                    <div className="x-span-5 grow">
                        <h2 className="h2 text-center">Legally compliant</h2>
                        <p>
                            Your Web needs to comply with internet laws and
                            standards of different markets. These include GDPR,
                            FTCA, WCAG and WAI-ARIA.
                        </p>
                        <p>
                            You can be at ease knowing the risk of legal
                            penalties is minimised.
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
