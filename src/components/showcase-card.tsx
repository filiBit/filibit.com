import { ReactNode } from "react";

interface Props {
    title: string;
    description: string;
    tags: string[];
    imageUrls?: string[];
    footerContent?: ReactNode;
}

export function ShowcaseCard({
    title,
    description,
    tags,
    imageUrls,
    footerContent,
}: Props) {
    return (
        <div className="col round-1 border-1px border-bottom-1px border-left-1px w-span-6 grow shrink hue round-1 overflow-no">
            <div className="border-bottom-1px chroma-bg-2 px-2 py-1 lh-1.5 row align-center f-weight-xl">
                {title}
            </div>
            <div className="pt-2 grow col gap-2 justify-between chroma-bg">
                <div className="grow col gap-2 chroma-bg">
                    {imageUrls?.map((url) => (
                        <img key={url} src={url} className="mx-2 border-1px" />
                    ))}
                    <p className="mx-2 my-0">{description}</p>
                </div>
                <div
                    className="p-2 row flex-wrap gap-1 f-size-sm select-none"
                    style={{
                        flexDirection: "row-reverse",
                        flexWrap: "wrap-reverse",
                    }}
                >
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="border-1px px-1 hue-b chroma-bg-2 lh-2"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            {footerContent && (
                <div className="border-top-1px pt-2">{footerContent}</div>
            )}
        </div>
    );
}
