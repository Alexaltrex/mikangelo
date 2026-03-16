'use client'

import style from "./Pagination.module.scss";
import {clsx} from "clsx";
import {svgIcons} from "../../../../assets/svgIcons";


interface IPagination {
    page: number
    pages: number
    className?: string
    onPage: (page: number) => void
}

export const Pagination = ({
                               page,
                               pages,
                               className,
                               onPage,
                           }: IPagination) => {

    // const ostatok =  page % 5;
    // (page - (page % 5)) + 1
    //console.log((5 - (5 % 5)) / 5 + 1)

    const currentGroup = page % 5 === 0 ? Math.round(page / 5) : Math.floor(page / 5) + 1; //(page - (page % 5)) / 5 + 1;
    const groupCount = Math.ceil(pages / 5);

    const groupPageStart = (currentGroup - 1) * 5 + 1;
    const groupPageEnd = pages < currentGroup * 5 ? pages : currentGroup * 5;

    // console.log("page: ", page);
    // console.log("pages: ", pages);

    // console.log("currentGroup: ", currentGroup);
    // console.log("groupCount: ", groupCount);
    // console.log("groupPageStart: ", groupPageStart);
    // console.log("groupPageEnd: ", groupPageEnd);
    // console.log("================================")

    return (
        <div className={clsx(style.pagination, Boolean(className) && className)}>
            <button className={clsx(style.btn, style.btn_prev)}
                    disabled={page === 1}
                    onClick={() => onPage(page - 1)}

            >
                {svgIcons.arrow_right}
            </button>
            {
                Array.from({length: groupPageEnd - groupPageStart + 1}, (v, k) => k)
                    .map(key => (
                        <button key={key}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: groupPageStart + key === page,
                                })}
                                onClick={() => onPage(groupPageStart + key)}
                        >
                            <p>{groupPageStart + key}</p>
                        </button>
                    ))
            }
            <button className={clsx(style.btn, style.btn_next)}
                    disabled={page === pages}
                    onClick={() => onPage(page + 1)}
            >
                {svgIcons.arrow_right}
            </button>
        </div>
    )
}