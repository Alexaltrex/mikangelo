import style from "./Card.module.scss"
import {ICatalogItem} from "../../data";
import {svgIcons} from "../../../../assets/svgIcons";
import {clsx} from "clsx";
import Link from "next/link";


interface ICard {
    product: ICatalogItem
    onMoreDetailsHandler: (product: ICatalogItem) => void
}

export const Card = ({product, onMoreDetailsHandler}: ICard) => {
    const {
        src,
        name,
        href,
        category,
    } = product

    return (
        <div className={style.card}>
            <div className={style.top}>
                {
                    category === "Краска для волос" ? (
                        <Link className={style.imgWrapper}
                              href="/palette"
                        >
                            <img src={src} alt="" className={style.img}/>
                        </Link>
                    ) : (
                        <button className={style.imgWrapper}
                                onClick={() => onMoreDetailsHandler(product)}
                        >
                            <img src={src} alt="" className={style.img}/>
                        </button>
                    )
                }


                <p className={style.name}>
                    {name}
                </p>
            </div>

            <div className={style.links}>
                {
                    category === "Краска для волос"
                        ? (
                            <Link className={clsx(style.btn, style.btn_single)}
                                  href="/palette"
                            >
                                <p>КАРТА ПАЛИТРЫ</p>
                            </Link>
                        ) : (
                            <>
                                <a href={href}
                                   target="_blank"
                                   rel="noreferrer noopener nofollow"
                                >
                                    {svgIcons.wb_button}
                                </a>
                                <button className={style.btn}
                                        onClick={() => onMoreDetailsHandler(product)}
                                >
                                    <p>ПОДРОБНЕЕ</p>
                                </button>
                            </>
                        )
                }


            </div>
        </div>
    )
}