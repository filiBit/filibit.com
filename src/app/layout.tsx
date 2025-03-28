"use client";

import "./globals.css";
import "./oxiris-css-2.1.0.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { useSystemColorScheme } from "@/hooks/ useSystemColorScheme";
import { GithubIcon } from "@/components/icon/github";

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

    const [cornerRadiusFactor, setCornerRadiusFactor] = useState<number>(1);

    function switchColorScheme() {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    }

    function toggleCornerRadius() {
        setCornerRadiusFactor(cornerRadiusFactor === 0 ? 1 : 0);
    }

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen, setIsMenuOpen]);

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${notoSansMono.style.fontFamily};
                }
            `}</style>
            <html lang="en">
                <body
                    className={`${colorScheme} col md:p-3 m-0 lh-1.5`}
                    style={{
                        // @ts-expect-error - CSS custom property
                        "--ox-round-factor": cornerRadiusFactor,
                    }}
                >
                    <div className="grow w-span-16 max-w-100% mx-auto col gap-2 md:gap-3">
                        <div className="mt-2 mx-2 md:m-0 row gap-1 justify-between">
                            <Link
                                href="/"
                                className="button border-0 p-0 col w-span-3 align-start justify-center h-6 round-1"
                            >
                                <Logo />
                            </Link>
                            <div className="row justify-end gap-1">
                                <nav className="hide md:row lg:hide gap-1 hue-d">
                                    <Link
                                        className={`button h-6 ${
                                            pathname === "/"
                                                ? "var-contained"
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
                                                ? "var-contained"
                                                : ""
                                        }`}
                                    >
                                        Showcase
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`button h-6 ${
                                            pathname === "/about"
                                                ? "var-contained"
                                                : ""
                                        }`}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`button h-6 ${
                                            pathname === "/contact"
                                                ? "var-contained"
                                                : ""
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <button
                                    className="hide lg:row button h-6"
                                    onClick={switchColorScheme}
                                >
                                    Theme [{colorScheme}]
                                </button>
                                <button
                                    className={`hide lg:row button h-6 ${
                                        cornerRadiusFactor === 0
                                            ? "var-indicator"
                                            : "var-indicator-filled"
                                    }`}
                                    onClick={toggleCornerRadius}
                                >
                                    Rounded
                                </button>
                                <Link
                                    href="https://github.com/filiBit"
                                    className="hide lg:row button h-6 tertiary"
                                >
                                    <GithubIcon className="h-3 w-3" />
                                </Link>
                                <button
                                    className={`lg:hide button tertiary h-6 toggle ${
                                        isMenuOpen ? "var-contained" : ""
                                    }`}
                                    onClick={toggleMenu}
                                >
                                    ...
                                </button>
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="col sm:row sm:justify-end align-end lg:hide md:round-2 mx-2 md:mx-0 gap-1 align-start">
                                <button
                                    className="button h-6 tertiary"
                                    onClick={switchColorScheme}
                                >
                                    Theme [{colorScheme}]
                                </button>
                                <button
                                    className={`button h-6 ${
                                        cornerRadiusFactor === 0
                                            ? "var-indicator"
                                            : "var-indicator-filled"
                                    }`}
                                    onClick={toggleCornerRadius}
                                >
                                    Rounded
                                </button>
                                <Link
                                    href="https://github.com/filiBit"
                                    className="button"
                                >
                                    <GithubIcon className="h-3 w-3" />
                                </Link>
                            </div>
                        )}

                        <div className="col lg:row gap-3">
                            <nav className="hide lg:col gap-1 letter-0.1em w-span-3 hue-d">
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

                            <div className="col gap-0 md:gap-3 grow">
                                <main className="col w-100% border-top-1px md:border-1px md:round-1 grow-0 overflow-no primary light:chroma-bg-3">
                                    <div className="row align-center h-6 px-2 fg-$bg border-bottom-1px">
                                        &gt;{" "}
                                        {pathname.slice(1, 2).toUpperCase() +
                                            pathname.slice(2) || "Home"}
                                    </div>
                                    {children}
                                </main>
                                <Footer />
                            </div>
                        </div>
                    </div>

                    <nav className="fixed row md:hide bottom w-100% gap-1 p-1 border-top-1px chroma-bg-0">
                        <Link
                            className={`button h-6 grow p-0 ${
                                pathname === "/" ? "var-contained" : ""
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            href="/showcase"
                            className={`button h-6 grow p-0 ${
                                pathname === "/showcase" ? "var-contained" : ""
                            }`}
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/about"
                            className={`button h-6 grow p-0 ${
                                pathname === "/about" ? "var-contained" : ""
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`button h-6 grow p-0 ${
                                pathname === "/contact" ? "var-contained" : ""
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
