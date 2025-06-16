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
        <div className="col round-2 w-span-6 grow shrink hue round-1 overflow-no chroma-bg-3">
            <div className="grow col gap-2 justify-between chroma-bg">
                <div className="grow col gap-2 chroma-bg">
                    {imageUrls?.map((url) => (
                        <img
                            key={url}
                            alt="Project preview"
                            src={url}
                            width={1008}
                            height={672}
                            style={{ height: "auto", width: "auto" }}
                            className="mt-1 mx-1 chroma-bg-2 border-1px round-1"
                        />
                    ))}
                    <div className="mx-2 lh-1.5 row align-center f-weight-xl">
                        {title}
                    </div>
                    <p className="mx-2 my-0">{description}</p>
                </div>
                <div
                    className="row mx-2 mb-2 flex-wrap gap-1 f-size-xs select-none"
                    style={{
                        flexDirection: "row-reverse",
                        flexWrap: "wrap-reverse",
                    }}
                >
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="border-1px px-1 hue-b chroma-bg-3 lh-2"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            {footerContent && (
                <div className="row gap-1 p-1 border-top-1px">
                    {footerContent}
                </div>
            )}
        </div>
    );
}
