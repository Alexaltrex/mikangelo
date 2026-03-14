'use client'

import style from "./BurgerMenu.module.scss"
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {clsx} from "clsx";

export const BurgerMenu = observer(() => {
    const {appStore: {showBurgerMenu, setShowBurgerMenu}} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_close]: !showBurgerMenu
        })}>
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
                        <Link key={key} href={href} className={style.link}
                              onClick={() => setShowBurgerMenu(false)}
                        >
                            {text}
                        </Link>
                    ))
                }
            </nav>

        </div>
    )
}, )