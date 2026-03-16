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

                </div>

            </div>
        </div>
    )
}