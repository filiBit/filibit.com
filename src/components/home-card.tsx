interface Props {
    title: string;
    description: string;
    tags: string[];
}

export function HomeCard({ title, description, tags }: Props) {
    return (
        <div className="col round-1 border-1px border-bottom-1px border-left-1px hue round-1 w-span-5 grow overflow-no">
            <div className="border-bottom-1px chroma-bg-2 h-6 px-2 row align-center f-weight-xl">
                {title}
            </div>
            <div className="pt-2 grow col gap-2 justify-between chroma-bg">
                <p className="mx-2 my-0">{description}</p>
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
        </div>
    );
}
