import style from "./Catalog.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";
import Link from "next/link";

export const Catalog = () => {
    return (
        <div className={style.catalog}>
            <div className={style.inner}>

                <LabelCustom text="Каталог" isWhite={false}/>

                <div className={style.images}>
                    <Link className={style.imgWrapper}
                          href="/catalog"
                    >
                        <img src="./catalog_0.png" alt=""/>
                        <p className={style.label}>УКЛАДКА И СТАЙЛИНГ</p>
                    </Link>

                    <div className={style.row}>
                        <Link className={style.imgWrapper}
                              href="/palette"
                        >
                            <img src="./catalog_1.png" alt=""/>
                            <p className={style.label}>КРАСКИ ДЛЯ ВОЛОС</p>
                        </Link>
                        <Link className={style.imgWrapper}
                              href="/catalog"
                        >
                            <img src="./catalog_2.png" alt=""/>
                            <p className={style.label}>БРИТЬЕ И УХОД</p>
                        </Link>
                    </div>

                    {/*<div className={style.imgWrapper}>*/}
                    {/*    <img src="./catalog_3.png" alt=""/>*/}
                    {/*    <p className={style.label}>УХОД ЗА КОЖЕЙ</p>*/}
                    {/*</div>*/}

                    <div className={style.row}>
                        <Link className={style.imgWrapper}
                              href="/catalog"
                        >
                            <img src="./catalog_4.png" alt=""/>
                            <p className={style.label}>САЛОННЫЕ ПРОДУКТЫ</p>
                        </Link>
                        <a className={style.imgWrapper}
                           href="https://www.wildberries.ru/seller/1354346"
                           target="_blank"
                           rel="noreferrer noopener nofollow"
                        >
                            <img src="./catalog_5.png" alt=""/>
                            <p className={style.label}>ОНЛАЙН МАГАЗИН</p>
                        </a>
                    </div>


                </div>

            </div>
        </div>
    )
}