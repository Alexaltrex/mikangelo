import style from "./Footer.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.logo}>
                    {svgIcons.logo_black}
                </div>

                <p className={style.right}>
                    Copyright © 2026 Mik'Angelo. All rights reserved
                </p>

                <Link href='/#first' className={style.link}>
                   <p>Главная</p>
                </Link>

            </div>
        </footer>
    )
}