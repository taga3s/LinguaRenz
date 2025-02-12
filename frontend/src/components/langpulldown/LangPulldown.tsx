"use client";
import CountryLabel from "../countrylabel/CountryLabel"
import { useState } from "react"
import Select from "react-select"

const options = [
    { value: "日本", label: <CountryLabel code="JP" countryName="日本" hasBorder={false} /> },
    { value: "アメリカ", label: <CountryLabel code="US" countryName="アメリカ" hasBorder={false} /> },
    { value: "中国", label: <CountryLabel code="CN" countryName="中国" hasBorder={false} /> },
]

export default function LangPulldown() {
    const [selectLanguage, setSelectLanguage] = useState([options[0]]);

    return (
        <div className="">
            <Select
                options={options}
                defaultValue={selectLanguage}
                onChange={(value) => {
                    value ? setSelectLanguage([...value]) : null;
                }}
                className="w-[650px] px-4 py-2"
                isMulti
            />
        </div>
    )
}