'use client'

import style from "./Reviews.module.scss"
import {LabelCustom} from "../../components/LabelCustom/LabelCustom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import type {Swiper as SwiperClass} from "swiper/types";
import {svgIcons} from "../../../assets/svgIcons";
import {useState} from "react";
import {reviewsData} from "./data";


export const Reviews = () => {
    const [swiper, setSwiper] = useState<SwiperClass>(null!)

    return (
        <div className={style.reviews} id="reviews">
            <div className={style.inner}>

                <LabelCustom text="Отзывы" isWhite={false}/>

                <div className={style.wrapper}>
                    <p className={style.about}>
                        Что говорят клиенты
                    </p>
                    <div className={style.btn}>
                        <p>БОЛЕЕ 15 ТЫСЯЧ ОТЗЫВОВ</p>
                        {svgIcons.arrow_right}
                    </div>
                </div>


                <Swiper breakpoints={{
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                    },
                    1440: {
                        spaceBetween: 16,
                        slidesPerView: 3
                    },
                }}
                        onInit={(swiper) => setSwiper(swiper)}
                        className={style.swiper}
                >
                    <>
                        {
                            reviewsData.map(({name, text,}, key) => (
                                <SwiperSlide key={key}
                                             className={style.slide}
                                >
                                    <div className={style.card}>
                                        <div className={style.nameWrapper}>
                                            <p>{name}</p>
                                            <div className={style.stars}>
                                                {svgIcons.star}
                                                {svgIcons.star}
                                                {svgIcons.star}
                                                {svgIcons.star}
                                                {svgIcons.star}
                                            </div>
                                        </div>
                                        <p className={style.text}>
                                            {text}
                                        </p>

                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </>
                </Swiper>

                <div className={style.navigation}>
                    <button onClick={() => swiper.slidePrev()}>
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