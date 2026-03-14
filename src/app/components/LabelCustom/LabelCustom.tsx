import style from "./LabelCustom.module.scss"
import {FC} from "react";
import {clsx} from "clsx";

interface ILabelCustom {
    text: string
    isWhite?: boolean
}

export const LabelCustom = ({text, isWhite = true}: ILabelCustom) => {
    return (
        <div className={clsx({
            [style.labelCustom]: true,
            [style.labelCustom_dark]: !isWhite,
        })}>
            <p>{text}</p>
        </div>
    )
}