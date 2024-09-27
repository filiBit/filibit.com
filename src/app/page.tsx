import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Filibit software",
    description: "Web solutions that just work",
};

export default function Home() {
    return (
        <>
            <h1 className={`text-center ${styles.title} m-1 sm:m-2 mb-1/2`}>
                Web solutions that just work
            </h1>
            <p className="m-1 sm:m-2 mt-1/2 mb-2 text-center">
                A decade of experience in building unique and custom Web
                applications
            </p>
            <div className="m-1 sm:m-2 col md:row wrap space-2 justify-center">
                <div className="basis-1/2 lg:basis-1/4 grow">
                    <h2 className={`${styles["sub-title"]} text-center`}>
                        Aesthetic
                    </h2>
                    <p>
                        Beauty can be measured objectively by symetry,
                        responsiveness, consistent spacing and other visual
                        patterns.
                    </p>
                    <p>
                        I apply this knowledge to Graphical User Interface
                        (GUI).
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/4 grow">
                    <h2
                        className={`${styles["sub-title"]} text-center basis-1/2 md:basis-1/3  grow`}
                    >
                        Usable
                    </h2>
                    <p>
                        Intuitive visuals, readability, and a good user flow
                        contribute to your brand and productivity of the app.
                    </p>
                    <p>
                        There&apos;s a whole science behind the User Experience
                        (UX) and you will get the best.
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/3 grow">
                    <h2
                        className={`${styles["sub-title"]} text-center basis-1/2 md:basis-1/3  grow`}
                    >
                        Performant
                    </h2>
                    <p>
                        Low operating cost and fast load time is important for
                        any online business.
                    </p>
                    <p>
                        I invest significant effort into designing a cloud
                        infrastructure specifically for your use case.
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/3 grow">
                    <h2
                        className={`${styles["sub-title"]} text-center basis-1/2 md:basis-1/3  grow`}
                    >
                        Custom
                    </h2>
                    <p>
                        By familiarizing myself with your business domain, I
                        will optimally design a system for your need.
                    </p>
                    <p>
                        This will make your software unique and tailored to your
                        needs.
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/3 grow">
                    <h2
                        className={`${styles["sub-title"]} text-center basis-1/2 md:basis-1/3  grow`}
                    >
                        Maintainable
                    </h2>
                    <p>
                        Common sense coding practices, simple deployment flow
                        and vendor independence promote flexibility.
                    </p>
                    <p>
                        These qualities will make your system scalable, robust
                        and easy to upgrade in the future. It will also give you
                        freedom to switch the developer if you were to wish so.
                    </p>
                </div>
                <div className="basis-1/1 lg:basis-1/3 grow">
                    <h2
                        className={`${styles["sub-title"]} text-center basis-1/2 md:basis-1/3  grow`}
                    >
                        Legally compliant
                    </h2>
                    <p>
                        Your Web needs to comply with internet laws and
                        standards of different markets. These include GDPR,
                        FTCA, WCAG and WAI-ARIA.
                    </p>
                    <p>
                        You can be at ease knowing the risk of legal penalties
                        is minimised.
                    </p>
                </div>
            </div>
            <div className="col align-center m-2">
                <Link href="/contact" className="button h-1">
                    Contact me
                </Link>
            </div>
        </>
    );
}
