import style from "./Brands.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";

export const Brands = () => {
    return (
        <div className={style.brands} id="brands">
            <div className={style.inner}>

                <LabelCustom text="Бренды" isWhite={false}/>

                <p className={style.about}>
                    Подборка брендов которым мы доверяем
                </p>

                <div className={style.cardsWrapper}>

                    <div className={style.cards}>
                        {
                            [
                                {
                                    card_title: "RedOne By Mik’AngeLo & Beauty",
                                    card_text: "профессиональный уход за волосами, после бритья, для укладки волос",
                                    href: "https://www.wildberries.ru/brands/312174201-redone-by-mikangelo-and-beauty",
                                },
                                {
                                    card_title: "Redist By Mik’AngeLo & Beauty",
                                    card_text: "профессиональный уход, шампуни, кондиционеры, фиксаторы для макияжа, комплектные уходи",
                                    href: "https://www.wildberries.ru/brands/312174200-redist-by-mikangelo-and-beauty",
                                },
                                {
                                    card_title: "Bandido By Mik’AngeLo & Beauty",
                                    card_text: "Профессиональный уход - за волосами, после бритья, шампуни, бальзамы.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Perfect Cosmetics By Mik’AngeLo & Beauty",
                                    card_text: "профессиональный уход - для лица, для волосами.",
                                    href: "https://www.wildberries.ru/brands/312262810-perfect-cosmetics-by-mikangelo-and-beauty",
                                },
                                {
                                    card_title: "Morfose",
                                    card_text: "профессиональный уход за волосами, косметика для женщин и для мужчин, краски для волос, Шампуни, термозащиты, кондиционеры, воск для волос.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "BARON",
                                    card_text: "профессиональные инструменты для Барбера, ножницы, воротнички, накидки, пульверизаторы парикмахерские.",
                                    href: "https://www.wildberries.ru/brands/312248501-baron-for-real-man",
                                },
                                {
                                    card_title: "Keratine queen official",
                                    card_text: "профессиональный уход за волосами, для восстановления волос, шампуни, маски для волос, кондиционеры, сыворотки для волос.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Black professional line",
                                    card_text: "Профессиональный уход за волосами, шампуни, маски для волос, кондиционеры",
                                    href: "https://www.wildberries.ru/brands/312139706-black-professional-line",
                                },
                                {
                                    card_title: "Niamh hairconcept",
                                    card_text: "профессиональный уход за волосами, косметика для волос.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Studex",
                                    card_text: "профессиональный бренд для прокаливания ушей.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Academie professional hair",
                                    card_text: "профессиональный бренд для волос, расчески, фени для волос.",
                                    href: "https://www.wildberries.ru/brands/312113163-academie-professional-hair",
                                },
                                {
                                    card_title: "Smoothly Professional",
                                    card_text: "профессиональный уход для депиляции, воски для депиляции.",
                                    href: "https://www.wildberries.ru/brands/312113163-academie-professional-hair",
                                },
                                {
                                    card_title: "Thuya professional",
                                    card_text: "профессиональный бренд, профессиональные средства для ламинирование бровей",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Inoderm",
                                    card_text: "профессиональный бренд, для тела. Воск для депиляции, для аппарата удаления волос.",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                                {
                                    card_title: "Eurostill",
                                    card_text: "профессиональный бренд для волос, профессиональные расчески",
                                    href: "https://www.wildberries.ru/seller/1354346",
                                },
                            ].map(({card_title, card_text, href}, key) => (
                                <a key={key}
                                   className={style.card}
                                   href={href}
                                   target="_blank"
                                   rel="noreferrer noopener nofollow"
                                >
                                    <img src={`./brand_${key}.png`} alt=""/>
                                    <div>
                                        <p>{card_title}</p>
                                        <p>{card_text}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>

                    <div className={style.arrowWrapper}>
                        <p>листай вниз</p>
                        <p>да, их много)</p>
                        <p>ооооооооочень много)</p>
                        <div className={style.arrow}/>

                    </div>

                </div>


            </div>
        </div>
    )
}