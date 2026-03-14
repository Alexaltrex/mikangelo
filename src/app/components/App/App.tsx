'use client'

import {clsx} from "clsx";

import React from "react";
import style from "./App.module.scss"
import {SFProDisplay} from "../../../assets/fonts/fonts";
import {Header} from "../Header/Header";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {Footer} from "../Footer/Footer";

export const App = observer(({children}: Readonly<{ children: React.ReactNode }>) => {
    const {appStore: {showBurgerMenu}} = useStore()
    return (
        <body className={clsx(SFProDisplay.className, {
            [style.app]: true,
            [style.app_disableScroll]: showBurgerMenu,
        })}>
            <Header/>
            <BurgerMenu/>
            <main>
                {children}
            </main>
            <Footer/>
        </body>
    )
})