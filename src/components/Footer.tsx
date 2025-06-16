import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="col p-2 md:p-4 pt-6 pb-14 md:pt-2 md:pb-2 border-top-1px md:border-1px round-0 md:round-2 gap-6 sm:gap-3 lh-2 hue-b light:chroma-bg-3">
            <div className="col sm:row row gap-6 justify-between">
                <div className="col align-center sm:align-start">
                    <Link href="/" className="link">
                        Home
                    </Link>
                    <Link href="/showcase" className="link">
                        Showcase
                    </Link>
                    <Link href="/about" className="link">
                        About
                    </Link>
                    <Link href="/contact" className="link">
                        Contact
                    </Link>
                </div>
                <div className="col gap-3 align-center sm:align-end">
                    <Logo />
                    <div className="col align-center sm:align-end">
                        <span>Filibit d.o.o.</span>
                        <span>Osijek, Croatia</span>
                    </div>
                </div>
            </div>
            <span className="text-center">© 2024 Filibit d.o.o.</span>
        </footer>
    );
}
