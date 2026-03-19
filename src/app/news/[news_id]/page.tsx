import style from "./NewsPage.module.scss"
import {INews, newsData} from "../../_HomePage/News/data";
import Image from 'next/image'

export async function generateStaticParams() {
    return newsData.map((_news) => ({
        slug: _news.id,
    }))
}

export default async function NewsPage({
                                           params
}: {
    params: Promise<{news_id: string
    }>}) {
    const {news_id} = await params;

    const newsItem = (newsData.find(el => el.id === news_id)) as INews;

    return (
        <div className={style.newsPage}
             style={{
                 background: newsItem.background
             }}
        >
            <div className={style.inner}>

                <img src={newsItem.src} alt="" className={style.img}/>

                <div className={style.text}
                     style={{color: newsItem.textColor}}
                >
                    {newsItem.text}
                </div>

            </div>
        </div>
    )
}

