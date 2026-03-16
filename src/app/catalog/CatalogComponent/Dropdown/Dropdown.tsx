import style from "./Dropdown.module.scss";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../../hooks/useOutsideButNotOnTargetClick";

interface IDropdown {
    label: string
    value: string
    values: string[]
    onSelect: (value: string) => void
    className?: string
}

export const Dropdown = ({
                             label,
                             value,
                             values,
                             onSelect,
                             className
                         }: IDropdown) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLButtonElement>(null!);

    useOutsideButNotOnTargetClick(ref, targetRef, () => setOpen(false))

    return (
        <div className={clsx(style.dropdown, Boolean(className) && className)}>
            <button className={clsx({
                [style.btn]: true,
                [style.btn_open]: open,
            })}
                    onClick={() => setOpen(!open)}
                    ref={targetRef}
            >
                <p>{label}</p>
                {svgIcons.arrow_down}
            </button>

            {
                open && (
                    <div className={style.list}
                         ref={ref}
                    >
                        {
                            values.map((_value, key) => (
                                <button key={key}
                                        onClick={() => {
                                            setOpen(false)
                                            onSelect(_value)
                                        }}
                                >
                                    <p>{_value}</p>
                                </button>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}