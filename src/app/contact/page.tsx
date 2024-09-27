import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
    title: "Filibit software | Contact",
    description: "Contact information about the company",
};

export default function Contact() {
    return (
        <>
            <h1 className={`text-center ${styles.title} m-2 mb-1`}>Contact</h1>

            <div className="m-1 md:m-1 col md:row space align-center md:align-start">
                <div className="border row">
                    <img
                        src="/fb.jpg"
                        className="w-2"
                        alt="Portrait of Filip Biterski"
                    />
                </div>
                <p className="m-0">
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
