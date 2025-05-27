import { ExternalLinkIcon } from "@/components/icon/external-link";
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
                <div className="border-1px row round-1 overflow-no">
                    <img
                        src="/fb.jpg"
                        alt="Portrait photo"
                        width={240}
                        height={318}
                        className="w-span-2 filter-low hover:filter-no chroma-bg-2"
                        draggable="false"
                        style={{ height: "auto" }}
                    />
                </div>
                <div className="col gap-2">
                    <div className="m-0 col gap-1 align-start">
                        <div className="select-all f-size-lg">
                            Filip Biterski
                        </div>
                        <div className="row px-1 hue-b chroma-bg-2 lh-2">
                            CEO / Software developer
                        </div>
                    </div>
                    <div className="m-0 lh-2 col">
                        <div className="row align-center">
                            <span className="w-10">Email:</span>
                            <div className="select-all f-size-sm">
                                filip.biterski@filibit.com
                            </div>
                        </div>
                        <div className="row align-center">
                            <span className="w-10">CV:</span>
                            <a
                                href="/CV.pdf"
                                className="link row align-center justify-center h-3 w-3"
                                target="_blank"
                            >
                                <ExternalLinkIcon className="max-h-2 max-w-2 w-100% h-100%" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
