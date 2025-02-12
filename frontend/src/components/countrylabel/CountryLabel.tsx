import Flag from "react-flagpack"

type props = {
    code: string
    size?: "S" | "M" | "L"
    countryName: string
    hasBorder: boolean
}

export default function CountryLabel(props: props) {
    const { code, size, countryName, hasBorder } = props;
    const hasBorderClass = (hasBorder: boolean) => {
        if (hasBorder) {
            return "rounded-full bg-lrz-bg-white border border-lrz-border-gray"
        }
    }

    return (
        <div
            className={
                `flex gap-4 px-4 py-2
                ${hasBorderClass(hasBorder)}`
            }
        >
            <div className="border border-lrz-border-gray">
                <Flag
                    code={code}
                    size={size ? size : "L"} 
                    hasDropShadow={true}
                    hasBorder={false}
                />
            </div>
            <p className="tracking-wider">{countryName}</p>
        </div>
    )
}