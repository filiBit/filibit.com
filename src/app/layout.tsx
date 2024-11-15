"use client";

import "./globals.css";
import "./oxiris-css-1.0.0-env+utility+component.css";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

const notoSansMono = Roboto_Mono({
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

type UiColorScheme = "ui-color-scheme-light" | "ui-color-scheme-dark";

type UiCorner = "ui-corner-round" | "ui-corner-sharp";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [uiColorSchemeClass, setColorSchemeClass] = useState<UiColorScheme>(
        "ui-color-scheme-dark"
    );
    const [uiCornerClass, setUiCornerClass] =
        useState<UiCorner>("ui-corner-round");

    const themeLabel = useMemo(
        () => uiColorSchemeClass.split("-").at(-1),
        [uiColorSchemeClass]
    );

    const cornerLabel = useMemo(
        () => uiCornerClass.split("-").at(-1),
        [uiCornerClass]
    );

    const changeColorScheme = useCallback(
        (colorScheme: null | UiColorScheme) => {
            setColorSchemeClass(colorScheme || "ui-color-scheme-dark");
        },
        []
    );

    const changeUiCorner = useCallback((uiCorner: null | UiCorner) => {
        setUiCornerClass(uiCorner || "ui-corner-round");
    }, []);

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
                    className={`${uiColorSchemeClass} ${uiCornerClass} accent-primary col md:p-3 m-0 lh-1.5em`}
                >
                    <div className="grow x-span-16 max-w-100% mx-auto col gap-2 md:gap-3">
                        <div className="mt-2 mx-2 md:m-0 row gap-1 justify-between">
                            <div className="col x-span-3 align-start justify-center h-6 round-1">
                                <Logo />
                            </div>
                            <div className="row justify-end gap-1">
                                <nav className="hide md:row lg:hide gap-1">
                                    <Link
                                        className={`button h-6 ${
                                            pathname === "/" ? "active" : ""
                                        }`}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/showcase"
                                        className={`button h-6 ${
                                            pathname === "/showcase"
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        Showcase
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`button h-6 ${
                                            pathname === "/about"
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`button h-6 ${
                                            pathname === "/contact"
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <button
                                    className="hide lg:row button h-6 tertiary"
                                    onClick={() => {
                                        changeColorScheme(
                                            uiColorSchemeClass ===
                                                "ui-color-scheme-light"
                                                ? "ui-color-scheme-dark"
                                                : "ui-color-scheme-light"
                                        );
                                    }}
                                >
                                    Theme [{themeLabel}]
                                </button>
                                <button
                                    className="hide lg:row button h-6 tertiary"
                                    onClick={() => {
                                        changeUiCorner(
                                            uiCornerClass === "ui-corner-sharp"
                                                ? "ui-corner-round"
                                                : "ui-corner-sharp"
                                        );
                                    }}
                                >
                                    Corners [{cornerLabel}]
                                </button>
                                <button
                                    className="hide lg:row button h-6 tertiary"
                                    disabled
                                >
                                    Language [en]
                                </button>
                                <button
                                    className={`lg:hide button tertiary h-6 toggle ${
                                        isMenuOpen ? "active" : ""
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
                                    onClick={() => {
                                        changeColorScheme(
                                            uiColorSchemeClass ===
                                                "ui-color-scheme-light"
                                                ? "ui-color-scheme-dark"
                                                : "ui-color-scheme-light"
                                        );
                                    }}
                                >
                                    Theme [{themeLabel}]
                                </button>
                                <button
                                    className="button h-6 tertiary"
                                    onClick={() => {
                                        changeUiCorner(
                                            uiCornerClass === "ui-corner-sharp"
                                                ? "ui-corner-round"
                                                : "ui-corner-sharp"
                                        );
                                    }}
                                >
                                    Corners [{cornerLabel}]
                                </button>
                                <button
                                    className="button h-6 tertiary"
                                    disabled
                                >
                                    Language [en]
                                </button>
                            </div>
                        )}

                        <div className="col lg:row gap-3">
                            <nav className="hide lg:col gap-1 letter-0.1em x-span-3 shrink-0">
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/" ? "active" : ""
                                    }`}
                                    href="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/showcase" ? "active" : ""
                                    }`}
                                    href="/showcase"
                                >
                                    Showcase
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/about" ? "active" : ""
                                    }`}
                                    href="/about"
                                >
                                    About
                                </Link>
                                <Link
                                    className={`button h-6 ${
                                        pathname === "/contact" ? "active" : ""
                                    }`}
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </nav>

                            <div className="col gap-0 md:gap-3 grow">
                                <main className="col w-100% border-top-1px md:border-1px md:round-1 grow-0 overflow-no primary solid">
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

                    <nav className="fixed row md:hide bottom w-100% gap-1 p-1 border-top-1px solid">
                        <Link
                            className={`button h-6 grow p-0 ${
                                pathname === "/" ? "active" : ""
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            href="/showcase"
                            className={`button h-6 grow p-0 ${
                                pathname === "/showcase" ? "active" : ""
                            }`}
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/about"
                            className={`button h-6 grow p-0 ${
                                pathname === "/about" ? "active" : ""
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`button h-6 grow p-0 ${
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
