'use client'

import style from "./Header.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

export const Header = observer(() => {
    const {appStore: {showBurgerMenu, setShowBurgerMenu}} = useStore();

    return (
        <header className={style.header}>

            <div className={style.inner}>

                <Link href="/"
                      className={style.logo}
                >
                    {svgIcons.logo_black}
                </Link>

                <nav className={style.links}>
                    {
                        [
                            {text: "Главная", href: "/"},
                            {text: "О нас", href: "/#about"},
                            {text: "Каталог", href: "/catalog"},
                            {text: "Бренды", href: "/#brands"},
                            {text: "Новости", href: "/#news"},
                            {text: "Отзывы", href: "/#reviews"},
                            {text: "Контакты", href: "/#contacts"},
                        ].map(({text, href}, key) => (
                            <Link key={key}
                                  href={href}
                                  className={style.link}
                            >
                                {text}
                            </Link>
                        ))
                    }
                </nav>

                <button className={style.burger}
                        onClick={() => setShowBurgerMenu(!showBurgerMenu)}

                >
                    {showBurgerMenu ? <p>X</p> : svgIcons.burger}
                </button>


            </div>
        </header>
    )
})