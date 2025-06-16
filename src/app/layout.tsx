"use client";

import "./globals.css";
import "./oxiris-css-2.5.0.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { useSystemColorScheme } from "@/hooks/ useSystemColorScheme";
import { ColorSchemeIcon } from "@/components/icon/color-scheme";

const notoSansMono = Roboto_Mono({
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [colorScheme, setColorScheme] = useState<string>("dark");

    const systemColorScheme = useSystemColorScheme();

    useEffect(() => {
        setColorScheme(systemColorScheme || "dark");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function switchColorScheme() {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    }

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${notoSansMono.style.fontFamily};
                }
            `}</style>
            <html lang="en">
                <body className={`${colorScheme} col md:p-3 m-0 lh-1.5`}>
                    <div className="grow max-w-span-16 w-100% mx-auto col gap-2 sm:gap-4 overflow-no">
                        <div className="mt-2 mx-2 md:m-0 row gap-1 justify-between">
                            <Link
                                href="/"
                                className="button border-0 p-0 col w-span-3 align-start justify-center h-6 round-1"
                            >
                                <Logo className="hue-d" />
                            </Link>
                            <div className="row justify-start gap-1">
                                <nav className="hide md:row gap-1">
                                    <Link
                                        className={`button h-6 ${
                                            pathname === "/"
                                                ? "var-contained hue-d"
                                                : ""
                                        }`}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/showcase"
                                        className={`button h-6 ${
                                            pathname === "/showcase"
                                                ? "var-contained hue-d"
                                                : ""
                                        }`}
                                    >
                                        Showcase
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`button h-6 ${
                                            pathname === "/about"
                                                ? "var-contained hue-d"
                                                : ""
                                        }`}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`button h-6 ${
                                            pathname === "/contact"
                                                ? "var-contained hue-d"
                                                : ""
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <button
                                    className="button chroma-bg-3 h-6 hue-b"
                                    onClick={switchColorScheme}
                                >
                                    <ColorSchemeIcon className="h-2 w-2" />
                                </button>
                            </div>
                        </div>

                        <div className="col lg:row gap-3">
                            <nav className="hide gap-1 letter-0.1em w-span-3 hue-d">
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/" ? "var-contained" : ""
                                    }`}
                                    href="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/showcase"
                                            ? "var-contained"
                                            : ""
                                    }`}
                                    href="/showcase"
                                >
                                    Showcase
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/about"
                                            ? "var-contained"
                                            : ""
                                    }`}
                                    href="/about"
                                >
                                    About
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/contact"
                                            ? "var-contained"
                                            : ""
                                    }`}
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </nav>

                            <div className="col gap-0 md:gap-4 grow">
                                <div className="col w-100% md:border-1px md:round-2 grow-0 overflow-no primary">
                                    <main className="col w-100%">
                                        {children}
                                    </main>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>

                    <nav className="fixed row md:hide bottom w-100% gap-1 p-1 border-top-1px chroma-bg-3 ue-d">
                        <Link
                            className={`button chroma-bg-0 h-6 grow p-0 ${
                                pathname === "/" ? "var-contained hue-d" : ""
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            href="/showcase"
                            className={`button chroma-bg-0 h-6 grow p-0 ${
                                pathname === "/showcase"
                                    ? "var-contained hue-d"
                                    : ""
                            }`}
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/about"
                            className={`button chroma-bg-0 h-6 grow p-0 ${
                                pathname === "/about"
                                    ? "var-contained hue-d"
                                    : ""
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`button chroma-bg-0 h-6 grow p-0 ${
                                pathname === "/contact"
                                    ? "var-contained hue-d"
                                    : ""
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
