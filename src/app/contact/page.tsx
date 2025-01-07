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
                    />
                </div>
                <p className="m-0 lh-2">
                    N: Filip Biterski
                    <br />
                    P: +385 95 732 0081
                    <br />
                    E: filip.biterski@filibit.com
                </p>
            </div>
        </>
    );
}
