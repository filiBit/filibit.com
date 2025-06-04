import { GithubIcon } from "@/components/icon/github";
import { LinkedInIcon } from "@/components/icon/linked-in-icon";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filibit software | Contact",
    description: "Contact information about the company",
};

export default function Contact() {
    return (
        <>
            <h1 className={`text-center h1 mt-8 mb-8`}>Contact</h1>
            <div className="mb-8 p-2 md:p-3 col md:row gap-3 align-center md:align-start md:justify-center">
                <div className="col gap-1">
                    <div className="border-1px row round-1 overflow-no">
                        <img
                            src="/fb.jpg"
                            alt="Portrait photo"
                            width={240}
                            height={318}
                            className="w-16 hover:filter-no chroma-bg-2 select-none"
                            draggable="false"
                            style={{ height: "auto" }}
                        />
                    </div>
                    <div className="row align-center justify-end gap-1 select-none">
                        <a
                            href="/CV.pdf"
                            className="link row align-center justify-center h-4 w-4 f-weight-xl"
                            target="_blank"
                        >
                            CV
                        </a>
                        <a
                            href="https:github.com/filiBit"
                            className="link row align-center justify-center h-4 w-4"
                            target="_blank"
                        >
                            <GithubIcon className="max-h-3 max-w-3 w-100% h-100%" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/filip-biterski/"
                            className="link row align-center justify-center h-4 w-4"
                            target="_blank"
                        >
                            <LinkedInIcon className="max-h-3 max-w-3 w-100% h-100%" />
                        </a>
                    </div>
                </div>
                <div className="col gap-2 max-w-100%">
                    <div className="m-0 col gap-1 align-start">
                        <div className="select-all f-size-lg">
                            Filip Biterski
                        </div>
                        <div className="row px-1 hue-b chroma-bg-2 lh-2">
                            CEO / Software developer
                        </div>
                    </div>
                    <div className="m-0 lh-2 col">
                        <div className="row align-center flex-wrap">
                            <div className="select-all f-size-sm">
                                filip.biterski@filibit.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
