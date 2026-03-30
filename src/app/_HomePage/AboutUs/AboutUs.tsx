import style from "./AboutUs.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";


export const AboutUs = () => {
    return (
        <div className={style.aboutUs} id="about">

            <div className={style.inner}>

                <img src="./sun.png" alt="" className={style.sun}/>
                <img src="./head.png" alt="" className={style.head}/>

                <LabelCustom text="О нас"/>

                <h2 className={style.title}>
                    Mik’AngeLo — это магазин красоты, вдохновлённый символом ангела
                </h2>

                <p className={style.description}>
                    Мы создали пространство, где каждый может найти качественные средства для ухода за собой и
                    подчеркнуть свою естественную красоту
                </p>

                <div className={style.text}>
                    <p>
                        В нашем магазине мы представляем популярные и проверенные бренды косметики, которые заслужили
                        доверие покупателей по всему миру. Мы тщательно подбираем ассортимент, чтобы предложить только
                        эффективные и востребованные продукты.
                    </p>
                    <br/>
                    <p>
                        В Mik’AngeLo вы найдёте всё необходимое для красоты и ухода: средства для волос, ухода за кожей,
                        стайлинга и ежедневного ухода.
                    </p>
                    <br/>
                    <p>
                        Наша цель — сделать качественную косметику доступной и помочь каждому чувствовать уверенность в
                        своей красоте.
                    </p>
                    <br/>
                    <p>
                        Продано и доставлено более 70000 товаров
                    </p>
                    <br/>
                    <p>
                        Mik’AngeLo — красота и уход, вдохновлённые лёгкостью ангела.
                    </p>

                </div>

            </div>

        </div>
    )
}