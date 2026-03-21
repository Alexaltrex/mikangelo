import style from "./Popup.module.scss";
import {ICatalogItem} from "../../data";
import {svgIcons} from "../../../../assets/svgIcons";

interface IPopup {
    product: ICatalogItem
    onClose: () => void
}


export const Popup = ({product, onClose}: IPopup) => {
    return (
        <div className={style.popup}>
            <div className={style.card}>
                <button className={style.closeBtn}
                        onClick={() => onClose()}
                >
                    {svgIcons.close}
                </button>

                <img src={product.src} alt=""/>

                <div className={style.content}>
                    <div className={style.contentTop}>
                        <p className={style.brand}>
                            {product.brand}
                        </p>
                        <p className={style.name}>
                            {product.name}
                        </p>
                        <div className={style.texts}>
                            {product.texts}
                        </div>
                    </div>
                    <div className={style.contentBottom}>
                        <div className={style.info}>
                            <div>
                                {product.value && <p>Объем {product.value}</p>}
                                <p>Тип: {product.category}</p>
                                {product.additional && <p>{product.additional}</p>}
                            </div>
                            <a className={style.buy}
                               href={product.href}
                               target="_blank"
                               rel="noreferrer noopener nofollow"
                            >
                                {svgIcons.wb_button}
                            </a>
                        </div>
                        <a href="#"
                           target="_blank"
                           rel="noreferrer noopener nofollow"
                           className={style.link}
                        >
                            <p>
                                Ознакомьтесь со всеми категориями товаров на WildBerries
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}