interface Props {
    title: string;
    description: string;
    tags: string[];
}

export function HomeCard({ title, description, tags }: Props) {
    return (
        <div className="col round-1 border-1p border-bottom-1p border-left-1p hue round-1 shrink w-span-5 grow overflow-no chroma-bg-3">
            <div className="border-bottom-1p h-8 px-2 row align-center f-weight-l f-size-lg">
                {title}
            </div>
            <div className="pt-1 grow col gap-3 justify-between">
                <p className="mx-2 my-0">{description}</p>
                <div
                    className="p-2 row flex-wrap gap-1 f-size-xs select-none"
                    style={{
                        flexDirection: "row-reverse",
                        flexWrap: "wrap-reverse",
                    }}
                >
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="border-1px px-1 hue-d chroma-bg-3 lh-2"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
