import style from "./Card.module.scss"
import {ICatalogItem} from "../../data";
import {svgIcons} from "../../../../assets/svgIcons";


interface ICard {
    product: ICatalogItem
    onMoreDetailsHandler: (product: ICatalogItem) => void
}

export const Card = ({ product, onMoreDetailsHandler }: ICard) => {
    const {
        src,
        name,
        href,
    } = product

    return (
        <div className={style.card}>
            <div className={style.top}>
                <button className={style.imgWrapper}
                        onClick={() => onMoreDetailsHandler(product)}
                >
                    <img src={src} alt="" className={style.img}/>
                </button>

                <p className={style.name}>
                    {name}
                </p>
            </div>

            <div className={style.links}>
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
            </div>
        </div>
    )
}