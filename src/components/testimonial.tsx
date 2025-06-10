interface Props {
    name: string;
    companyName: string;
    quote: string;
}

export function Testimonial({ name, companyName, quote }: Props) {
    return (
        <div className="max-w-span-6 col px-3 py-2 chroma-bg-2 round-1">
            <div className="f-size-g border-bottom-2px pb-2 mb-2">{quote}</div>
            <div className="f-size-sm">{name}</div>
            <div className="f-size-sm">{companyName}</div>
        </div>
    );
}
