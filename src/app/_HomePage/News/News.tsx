'use client'

import style from "./News.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {newsData} from "./data";
import {svgIcons} from "../../../assets/svgIcons";
import Link from "next/link";
import {ReactNode, useState} from "react";
import type {Swiper as SwiperClass} from "swiper/types";

export const News = () => {
    const [swiper, setSwiper] = useState<SwiperClass>(null!)

    return (
        <div className={style.news} id="news">
            <div className={style.inner}>

                <LabelCustom text="Новости"/>

                <Swiper breakpoints={{
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                    },
                    1440: {
                        spaceBetween: 56,
                        slidesPerView: 3
                    },
                }}
                        onInit={(swiper) => setSwiper(swiper)}
                        className={style.swiper}
                >
                    <>
                        {
                            newsData.map(({id, background, title, text_short, src}) => (
                                <SwiperSlide key={id}
                                             className={style.slide}
                                >
                                    <div className={style.card}>
                                        <div className={style.imgWrapper}
                                             style={{background}}
                                        >
                                            <img alt="" src={src}/>
                                        </div>
                                        <div className={style.info}>
                                            <div className={style.infoTop}>
                                                <Link className={style.label}
                                                      href={`/news/${id}`}
                                                >
                                                    <p>ОБЗОР</p>
                                                </Link>
                                                <p className={style.cardTitle}>{title}</p>
                                                <p className={style.text}>{text_short}</p>
                                            </div>


                                            <Link className={style.read}
                                                  href={`/news/${id}`}
                                            >
                                                <p>Читать</p>
                                                {svgIcons.arrow_right as ReactNode}
                                            </Link>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </>
                </Swiper>

                <div className={style.navigation}>
                    <button onClick={() => swiper.slidePrev()}
                    >
                        {svgIcons.arrow_left_long}
                    </button>
                    <button onClick={() => swiper.slideNext()}>
                        {svgIcons.arrow_right_long}
                    </button>
                </div>


            </div>
        </div>
    )
}