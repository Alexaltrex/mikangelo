import style from "./Contacts.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

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
                                        href: "#",
                                        text: "Instagram",
                                    },
                                    {
                                        src: "./social_tiktok.png",
                                        href: "#",
                                        text: "TikTok",
                                    },
                                    {
                                        src: "./social_wb.png",
                                        href: "#",
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
                            {
                                [
                                    {
                                        text: "Перейти в Wildberries",
                                    },
                                    {
                                        text: "Перейти в каталог",
                                    },
                                ].map(({text}, key) => (
                                    <div key={key}
                                         className={style.link}
                                    >
                                        <p>{text}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}