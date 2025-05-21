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
                        className="w-span-2 filter-low hover:filter-no"
                        alt="Portrait of Filip Biterski"
                        draggable="false"
                    />
                </div>
                <p className="m-0 lh-2 col gap-1">
                    <div className="row">
                        Name:&nbsp;
                        <div className="select-all">Filip Biterski</div>
                    </div>
                    <div className="row">
                        Phone:&nbsp;
                        <div className="select-all">+385 95 732 0081</div>
                    </div>
                    <div className="row flex-wrap">
                        Email:&nbsp;
                        <div className="select-all">
                            filip.biterski@filibit.com
                        </div>
                    </div>
                    <div className="row align-center">
                        CV:&nbsp;
                        <a
                            href="/CV.pdf"
                            className="link row align-center justify-center h-3 w-3"
                            target="_blank"
                        >
                            <ExternalLinkIcon className="max-h-2 max-w-2 w-100% h-100%" />
                        </a>
                    </div>
                </p>
            </div>
        </>
    );
}
