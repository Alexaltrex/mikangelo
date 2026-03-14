//'use client'


import style from "./NewsPage.module.scss"
import {newsData} from "../../_HomePage/News/data";

export default async function NewsPage({params}: {params: Promise<{news_id: string}>}) {
    const {news_id} = await params;
    // console.log(params)
    // console.log(news_id);

    const newsItem = newsData.find(el => el.id === news_id);

    return (
        <div className={style.newsPage}
             style={{
                 //background: newsItem.background
             }}
        >
            <div className={style.inner}>

                <img src='./news_0.png' alt="" className={style.img}/>


                {news_id}
            </div>
        </div>
    )
}

