"use client";

import "./globals.css";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

const notoSansMono = Roboto_Mono({
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

type ColorScheme = "light" | "dark";

// function getSystemColorScheme(): ColorScheme {
//     return typeof window === "undefined"
//         ? "dark"
//         : window?.matchMedia &&
//           window.matchMedia("(prefers-color-scheme: light)").matches
//         ? "light"
//         : "dark";
// }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

    const changeColorScheme = useCallback((colorScheme: null | ColorScheme) => {
        setColorScheme(colorScheme || "dark");
    }, []);

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${notoSansMono.style.fontFamily};
                }
            `}</style>
            <html lang="en">
                <body className={`color-scheme-${colorScheme}`}>
                    <div className="md:m-1">
                        <div className="col space">
                            <div className="row space border-collapse-box-x">
                                <div className="hidden lg:col">
                                    <div
                                        className="border row align-center justify-center h-1 w-2 no-select"
                                        role="img"
                                        aria-roledescription="Logo of Filibit company"
                                    >
                                        <span>&lt;</span>Filibit&nbsp;
                                        <span>/</span>
                                        <span>&gt;</span>
                                    </div>
                                </div>
                                <div className="col w-full">
                                    <div className="hidden lg:row end shrink border-collapse-box-x">
                                        <button
                                            className="button h-1"
                                            onClick={() => {
                                                changeColorScheme(
                                                    colorScheme === "light"
                                                        ? "dark"
                                                        : "light"
                                                );
                                            }}
                                        >
                                            Theme [{colorScheme}]
                                        </button>
                                        <button className="button h-1" disabled>
                                            Language [en]
                                        </button>
                                    </div>
                                    <div className="row lg:hidden w-full border-collapse-box-x">
                                        <div
                                            role="img"
                                            aria-roledescription="Logo of Filibit company"
                                            className="grow row border row align-center justify-center md:px-1 h-1 w-full md:w-auto md:justify-center border-0 border-bottom md:border no-select"
                                        >
                                            <span>&lt;</span>Filibit&nbsp;
                                            <span>/</span>
                                            <span>&gt;</span>
                                        </div>
                                        <button
                                            className="md:hidden button h-1 w-2 border-0 border-left border-bottom shrink-0 basis-1/2"
                                            onClick={() => {
                                                changeColorScheme(
                                                    colorScheme === "light"
                                                        ? "dark"
                                                        : "light"
                                                );
                                            }}
                                        >
                                            Theme [{colorScheme}]
                                        </button>
                                        <nav className="hidden md:row lg:hidden w-full border-collapse-box-x letter-2">
                                            <Link
                                                className={`button h-1 w-full ${
                                                    pathname === "/"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/"
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                href="/showcase"
                                                className={`button h-1 w-full ${
                                                    pathname === "/showcase"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                Showcase
                                            </Link>
                                            <Link
                                                href="/about"
                                                className={`button h-1 w-full ${
                                                    pathname === "/about"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                About
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className={`button h-1 w-full ${
                                                    pathname === "/contact"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                Contact
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col lg:row space">
                                <nav className="hidden lg:col border-collapse-box-y letter-2">
                                    <Link
                                        className={`button h-1 w-2 ${
                                            pathname === "/" ? "active" : ""
                                        }`}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        className={`button h-1 w-2 ${
                                            pathname === "/showcase"
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/showcase"
                                    >
                                        Showcase
                                    </Link>
                                    <Link
                                        className={`button h-1 w-2 ${
                                            pathname === "/about"
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/about"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        className={`button h-1 w-2 ${
                                            pathname === "/contact"
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/contact"
                                    >
                                        Contact
                                    </Link>
                                </nav>

                                <div className="row col space-2 w-full">
                                    <main className="md:border">
                                        {children}
                                    </main>
                                    <footer className="bg-dim p-1 lg:p-2 border-top md:border row wrap space-2 between">
                                        <div className="col lh-2">
                                            <Link href="/">Home</Link>
                                            <Link href="/showcase">
                                                Showcase
                                            </Link>
                                            <Link href="/about">About</Link>
                                            <Link href="/contact">Contact</Link>
                                        </div>
                                        <div className="col space-1/2">
                                            <div className="col lh-2">
                                                <div
                                                    role="img"
                                                    aria-roledescription="Logo of Filibit company"
                                                >
                                                    <span>&lt;</span>
                                                    Filibit&nbsp;
                                                    <span>/</span>
                                                    <span>&gt;</span>
                                                </div>
                                                <span>Filibit d.o.o.</span>
                                            </div>
                                            <div className="col lh-1.5">
                                                <span>Croatia</span>
                                                <span>Osijek</span>
                                                <span>Mostarska 41</span>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full md:hidden"></div>
                    <nav className="fixed row md:hidden bottom w-full bg border-collapse-box-x">
                        <Link
                            className={`button h-1 w-full border-left-0 p-0 ${
                                pathname === "/" ? "active" : ""
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            href="/showcase"
                            className={`button h-1 w-full p-0 ${
                                pathname === "/showcase" ? "active" : ""
                            }`}
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/about"
                            className={`button h-1 w-full p-0 ${
                                pathname === "/about" ? "active" : ""
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`button h-1 w-full border-right-0 p-0 ${
                                pathname === "/contact" ? "active" : ""
                            }`}
                        >
                            Contact
                        </Link>
                    </nav>
                </body>
            </html>
        </>
    );
}
