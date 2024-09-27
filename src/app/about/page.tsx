import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
    title: "Filibit software | About",
    description: "Information about the company",
};

export default function About() {
    return (
        <div className="px-1 md:px-2">
            <h1 className={`text-center ${styles.title} m-2`}>About</h1>

            <h2 className="my-1/2">Company full name</h2>
            <p className="mt-1/2 mb">
                Filibit društvo s ograničenom odgovornošću za računalno
                programiranje
            </p>

            <h2 className="my-1/2">Company short name</h2>
            <p className="mt-1/2 mb">Filibit d.o.o.</p>

            <h2 className="my-1/2">Headquarters</h2>
            <p className="my-1/2 mb">
                Croatia
                <br />
                Osijek
                <br />
                Mostarska 41
            </p>

            <h2 className="my-1/2">Board members</h2>
            <p className="mt-1/2 mb">Filip Biterski</p>

            <p className="mt mb-2">
                The company is entered in the court register of the Commercial
                Court in Zagreb under the registration file with the subject
                registration number (MBS) 030295426. The capital stock in the
                amount of 2.500,00 euro was paid completely.
            </p>
        </div>
    );
}
