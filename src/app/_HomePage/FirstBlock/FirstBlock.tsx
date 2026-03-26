'use client'

import style from "./FirstBlock.module.scss";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useRef} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import Link from "next/link";

export const FirstBlock = () => {
    const appRef = useRef<HTMLDivElement>(null!);
    const duration= 3;


    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(
            {
                isDesktop: "(min-width: 1440px)",
                isMobile: "(max-width: 1439px)",
            },
            (context) => {

                const {isMobile} = context.conditions as {isMobile: boolean};

                gsap.timeline({
                    //repeat: 0
                    delay: 1,
                })
                    .to(".statue", {
                        transform: "scale(1) translateX(-50%)",
                        duration,
                    }, "label_0")
                    .to(".home_left_top", {
                        left: isMobile ? "calc(50% - 120px)" : "70px",
                        top: isMobile ? "74px" : "140px",
                        opacity: 1,
                        scale: 1,
                        duration,
                    }, "label_0")
                    .to(".home_left_bottom", {
                        left: isMobile ? "calc(50% - 110px)" : "calc(50% - 416px)",
                        top: isMobile ? "calc(50% + 36px)" : "calc(50% + 68px)",
                        opacity: 1,
                        scale: 1,
                        duration,
                    }, "label_0")
                    .to(".home_right_top", {
                        left: isMobile ? "calc(50% + 72px)" : "calc(50% + 290px)",
                        top: isMobile ? "calc(50% - 106px)" : "calc(50% - 356px)",
                        opacity: 1,
                        scale: 1,
                        duration,
                    }, "label_0")
                    .to(".home_right_bottom", {
                        left: isMobile ? "calc(50% + 75px)" : "calc(50% + 190px)",
                        top: isMobile ? "calc(50% + 38px)" : "calc(50% + 66px)",
                        opacity: 1,
                        scale: 1,
                        duration,
                    }, "label_0")
                    .to(".cloud", {
                        transform: "translate(-50%, -50%)",
                        duration,
                    }, "label_0")

                    .to(".bottom-left", {
                        transform: "translateX(0)",
                        duration,
                    }, "label_0")
                    .to(".top-left", {
                        transform: "translateX(0)",
                        duration,
                    }, "label_0")
                    .to(".bottom-right", {
                        transform: "translateX(0)",
                        duration,
                    }, "label_0")
                    .to(".top-right", {
                        transform: "translateX(0)",
                        duration,
                    }, "label_0")
                    .to(".beauty", {
                        transform: "translateX(0)",
                        duration,
                    }, "label_0")
                    .to(".bottomPart", {
                        transform: "translateY(0)",
                        duration,
                    }, "label_0")
            })




    }, {scope: appRef})


    return (
        <div className={style.firstBlock}
             ref={appRef}
             id="first"
        >
            <div className={style.inner}>

                <div className={clsx(style.beauty, "beauty")}>
                    <p>Beauty</p>
                </div>
                
                <div className={clsx(style.bottomPart, "bottomPart")}>
                    <a href="https://www.wildberries.am/seller/1354346" target="_blank" className={style.wb_button}>
                        <img src="./wb_button.png" alt=""/>
                    </a>

                    <Link href="/" className={style.scroll_further}>
                        <img src="./scroll_further_link.png" alt=""/>
                    </Link>
                </div>


                <img src="./statue.png" alt="" className={clsx(style.statue, "statue")}/>
                <img src="./home_left_top.png" alt="" className={clsx(style.home_left_top, "home_left_top")}/>
                <img src="./home_left_bottom.png" alt="" className={clsx(style.home_left_bottom, "home_left_bottom")}/>
                <img src="./home_right_top.png" alt="" className={clsx(style.home_right_top, "home_right_top")}/>
                <img src="./home_right_bottom.png" alt=""
                     className={clsx(style.home_right_bottom, "home_right_bottom")}/>
                <img src="./cloud.png" alt="" className={clsx(style.cloud, "cloud")}/>

                <div className={style.titleWrapperBottom}>
                    <div className="bottom-left">
                        {svgIcons.title_left_bottom}
                    </div>
                    <div className="bottom-right">
                        {svgIcons.title_right_bottom}
                    </div>
                </div>
                <div className={style.titleWrapperTop}>
                    <div className="top-left">
                        {svgIcons.title_left_top}
                    </div>
                    <div className="top-right">
                        {svgIcons.title_right_top}
                    </div>

                </div>


            </div>
        </div>
    )
}