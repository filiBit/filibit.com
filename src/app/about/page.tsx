import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filibit software | About",
    description: "Information about the company",
};

export default function About() {
    return (
        <>
            <div className="row align-center h-6 px-2 fg-$bg tab-bar">
                &gt; About
            </div>
            <div className="px-2 md:px-4">
                <h1 className={`text-center h1 my-8`}>About</h1>

                <h2 className="my-1">Company full name</h2>
                <p className="my-1 mb-3">
                    Filibit društvo s ograničenom odgovornošću za računalno
                    programiranje
                </p>

                <h2 className="my-1">Company short name</h2>
                <p className="my-1 mb-3">Filibit d.o.o.</p>

                <h2 className="my-1">Headquarters</h2>
                <p className="my-1 mb-3">
                    Croatia
                    <br />
                    Osijek
                    <br />
                    Mostarska 41
                </p>

                <h2 className="my-1">Board members</h2>
                <p className="my-1 mb-3">Filip Biterski</p>

                <p className="my-3 mb-8">
                    The company is entered in the court register of the
                    Commercial Court in Osijek under the registration file with
                    the subject registration number (MBS) 030295426. The capital
                    stock in the amount of 2.500,00 euro was paid completely.
                </p>
            </div>
        </>
    );
}
