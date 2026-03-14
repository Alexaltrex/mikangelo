import style from "./Contacts.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import Link from "next/link";

export const Contacts = () => {
    return (
        <div className={style.contacts} id="contacts">
            <div className={style.inner}>

                <LabelCustom text="Контакты"/>

                <h2 className={style.title}>
                    Свяжитесь с нами
                </h2>

                <div className={style.blocks}>

                    <div className={style.block}>

                        <p className={style.label}>Соцсети</p>

                        <nav className={style.socialLinks}>
                            {
                                [
                                    {
                                        src: "./social_instagram.png",
                                        href: "https://www.instagram.com/mikangelobeauty?igsh=MWc1OGR1ajFuMjUycg%3D%3D&utm_source=qr",
                                        text: "Instagram",
                                    },
                                    {
                                        src: "./social_tiktok.png",
                                        href: "https://www.tiktok.com/@mikangelobeauty?_r=1&_t=ZS-94gJJ2HmQbJ",
                                        text: "TikTok",
                                    },
                                    {
                                        src: "./social_wb.png",
                                        href: "https://www.wildberries.ru/seller/1354346",
                                        text: "купите на wildberries",
                                    },
                                ].map(({src, href, text}, key) => (
                                    <a key={key}
                                       href={href}
                                       target="_blank"
                                       rel="noreferrer noopener nofollow"
                                       className={style.socialLink}
                                    >
                                        <img src={src} alt=""/>
                                        <p>{text}</p>
                                    </a>
                                ))
                            }
                        </nav>
                    </div>

                    <div className={style.block}>

                        <p className={style.label}>Быстрый переход</p>

                        <div className={style.links}>

                            <a href="https://www.wildberries.ru/seller/1354346"
                               className={style.link}
                               target="_blank"
                               rel="noreferrer noopener nofollow"
                            >
                                <p>Перейти в Wildberries</p>
                            </a>

                            <Link href="/catalog"
                                  className={style.link}
                            >
                                <p>Перейти в каталог</p>
                            </Link>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}