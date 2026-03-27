import {Metadata} from "next";
import style from "./PalettePage.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const metadata: Metadata = {
    title: "MIK'ANGELO - Карта палитры",
    description: "MIK'ANGELO - это магазин красоты, вдохновлённый символом ангела",
};
const PalettePage = () => {
    return (
        <div className={style.palettePage}>
            <div className={style.inner}>

                <h2 className={style.title}>
                    КАРТА ПАЛИТРЫ
                </h2>

                <div className={style.content}>

                    <div className={style.card}>
                        <img src="/catalog/113.jpg" alt=""/>
                        <p>Краска для волос Morfose</p>
                    </div>

                    <div className={style.palette}>
                        {
                            [
                                [
                                    {
                                        label: "1.1",
                                        href: "https://www.wildberries.am/catalog/309931215/detail.aspx?size=469095531",
                                    },
                                    {
                                        label: "1",
                                        href: "https://www.wildberries.am/catalog/309931214/detail.aspx?size=469095530",
                                    },
                                    {
                                        label: "3",
                                        href: "https://www.wildberries.am/catalog/309931216/detail.aspx?size=469095532",
                                    },
                                    {
                                        label: "4",
                                        href: "https://www.wildberries.am/catalog/309931217/detail.aspx?size=469095533",
                                    },
                                    {
                                        label: "5",
                                        href: "https://www.wildberries.am/catalog/309931218/detail.aspx?size=469095534",
                                    },
                                    {
                                        label: "6",
                                        href: "https://www.wildberries.am/catalog/309931219/detail.aspx?size=469095535",
                                    },
                                    {
                                        label: "7",
                                        href: "https://www.wildberries.am/catalog/309931220/detail.aspx?size=469095536",
                                    },
                                ],
                                [
                                    {
                                        label: "8",
                                        href: "https://www.wildberries.am/catalog/309931221/detail.aspx?size=469095537",
                                    },
                                    {
                                        label: "9",
                                        href: "https://www.wildberries.am/catalog/309931222/detail.aspx?size=469095538",
                                    },
                                    {
                                        label: "10",
                                        href: "https://www.wildberries.am/catalog/309931223/detail.aspx?size=469095539",
                                    },
                                    {
                                        label: "7S",
                                        href: "https://www.wildberries.am/catalog/309931226/detail.aspx?size=469095542",
                                    },
                                ],
                                [
                                    {
                                        label: "6.1",
                                        href: "https://www.wildberries.am/catalog/309931227/detail.aspx?size=469095543",
                                    },
                                    {
                                        label: "7.1",
                                        href: "https://www.wildberries.am/catalog/309931228/detail.aspx?size=469095544",
                                    },
                                    {
                                        label: "8.1",
                                        href: "https://www.wildberries.am/catalog/309931229/detail.aspx?size=469095545",
                                    },
                                    {
                                        label: "9.1",
                                        href: "https://www.wildberries.am/catalog/309931230/detail.aspx?size=469095546",
                                    },
                                ],
                                [
                                    {
                                        label: "5.11",
                                        href: "https://www.wildberries.am/catalog/309931231/detail.aspx?size=469095547",
                                    },
                                    {
                                        label: "6.11",
                                        href: "https://www.wildberries.am/catalog/309931232/detail.aspx?size=469095548",
                                    },
                                    {
                                        label: "9.11",
                                        href: "https://www.wildberries.am/catalog/309931235/detail.aspx?size=469095551",
                                    },
                                ],
                                [
                                    {
                                        label: "6.11",
                                        href: "https://www.wildberries.am/catalog/309931232/detail.aspx?size=469095548",
                                    },
                                    {
                                        label: "7.111",
                                        href: "https://www.wildberries.am/catalog/309931238/detail.aspx?size=469095554",
                                    },
                                    {
                                        label: "8.111",
                                        href: "https://www.wildberries.am/catalog/309931239/detail.aspx?size=469095555",
                                    },
                                    {
                                        label: "9.111",
                                        href: "https://www.wildberries.am/catalog/309931240/detail.aspx?size=469095556",
                                    },
                                ],
                                [
                                    {
                                        label: "6.34",
                                        href: "https://www.wildberries.am/catalog/310039597/detail.aspx?size=469283257",
                                    },
                                    {
                                        label: "7.34",
                                        href: "https://www.wildberries.am/catalog/310039598/detail.aspx?size=469283258",
                                    },
                                    {
                                        label: "8.34",
                                        href: "https://www.wildberries.am/catalog/310039599/detail.aspx?size=469283259",
                                    },
                                    {
                                        label: "6.4",
                                        href: "https://www.wildberries.am/catalog/310039600/detail.aspx?size=469283260",
                                    },
                                    {
                                        label: "7.4",
                                        href: "https://www.wildberries.am/catalog/310039601/detail.aspx?size=469283261",
                                    },
                                    {
                                        label: "8.4",
                                        href: "https://www.wildberries.am/catalog/310039602/detail.aspx?size=469283262",
                                    },
                                ],
                                [
                                    {
                                        label: "6.44",
                                        href: "https://www.wildberries.am/catalog/310039603/detail.aspx?size=469283263",
                                    },
                                    {
                                        label: "7.44",
                                        href: "https://www.wildberries.am/catalog/310039604/detail.aspx?size=469283264",
                                    },
                                    {
                                        label: "8.44",
                                        href: "https://www.wildberries.am/catalog/310039605/detail.aspx?size=469283265",
                                    },
                                    {
                                        label: "5.22",
                                        href: "https://www.wildberries.am/catalog/310039606/detail.aspx?size=469283266",
                                    },
                                    {
                                        label: "6.22",
                                        href: "https://www.wildberries.am/catalog/310039607/detail.aspx?size=469283267",
                                    },
                                    {
                                        label: "7.22",
                                        href: "https://www.wildberries.am/catalog/310039608/detail.aspx?size=469283268",
                                    },
                                ],
                                [
                                    {
                                        label: "5.6",
                                        href: "https://www.wildberries.am/catalog/310039609/detail.aspx?size=469283269",
                                    },
                                    {
                                        label: "6.6",
                                        href: "https://www.wildberries.am/catalog/310039610/detail.aspx?size=469283270",
                                    },
                                    {
                                        label: "7.6",
                                        href: "https://www.wildberries.am/catalog/310039611/detail.aspx?size=469283271",
                                    },
                                    {
                                        label: "6.65",
                                        href: "https://www.wildberries.am/catalog/310039612/detail.aspx?size=469283272",
                                    },
                                    {
                                        label: "7.65",
                                        href: "https://www.wildberries.am/catalog/310039613/detail.aspx?size=469283273",
                                    },
                                    {
                                        label: "8.66",
                                        href: "https://www.wildberries.am/catalog/310039614/detail.aspx?size=469283274",
                                    },
                                ],
                                [
                                    {
                                        label: "12.00",
                                        href: "https://www.wildberries.am/catalog/310039615/detail.aspx?size=469283275",
                                    },
                                    {
                                        label: "12",
                                        href: "https://www.wildberries.am/catalog/309931224/detail.aspx?size=469095540",
                                    },
                                    {
                                        label: "12.03",
                                        href: "https://www.wildberries.am/catalog/310039617/detail.aspx?size=469283277",
                                    },
                                    {
                                        label: "12.19",
                                        href: "https://www.wildberries.am/catalog/310039618/detail.aspx?size=469283278",
                                    },
                                ],
                                [
                                    {
                                        label: "YELLOW",
                                        href: "https://www.wildberries.am/catalog/310043708/detail.aspx?size=469288668",
                                    },
                                    {
                                        label: "ORANGE",
                                        href: "https://www.wildberries.am/catalog/310043709/detail.aspx?size=469288669",
                                    },
                                    {
                                        label: "RED",
                                        href: "https://www.wildberries.am/catalog/310043710/detail.aspx?size=469288670",
                                    },
                                    {
                                        label: "NAVI BLUE",
                                        href: "https://www.wildberries.am/catalog/310043711/detail.aspx?size=469288671",
                                    },
                                    {
                                        label: "GREEN",
                                        href: "https://www.wildberries.am/catalog/310043712/detail.aspx?size=469288672",
                                    },
                                    {
                                        label: "GREY",
                                        href: "https://www.wildberries.am/catalog/310043713/detail.aspx?size=469288673",
                                    },
                                    {
                                        label: "LILAC",
                                        href: "https://www.wildberries.am/catalog/310043714/detail.aspx?size=469288674",
                                    },
                                    {
                                        label: "NEUTRAL",
                                        href: "https://www.wildberries.am/catalog/310043715/detail.aspx?size=469288675",
                                    },
                                ],
                                [
                                    {
                                        label: "5.3",
                                        href: "https://www.wildberries.am/catalog/309959855/detail.aspx?size=469130034",
                                    },
                                    {
                                        label: "6.3",
                                        href: "https://www.wildberries.am/catalog/309959856/detail.aspx?size=469130035",
                                    },
                                    {
                                        label: "7.3",
                                        href: "https://www.wildberries.am/catalog/309959857/detail.aspx?size=469130036",
                                    },
                                    {
                                        label: "8.3",
                                        href: "https://www.wildberries.am/catalog/309959858/detail.aspx?size=469130037",
                                    },
                                    {
                                        label: "9.3",
                                        href: "https://www.wildberries.am/catalog/309959859/detail.aspx?size=469130038",
                                    },
                                    {
                                        label: "10.3",
                                        href: "https://www.wildberries.am/catalog/309959860/detail.aspx?size=469130039",
                                    },
                                    {
                                        label: "11.3",
                                        href: "https://www.wildberries.am/catalog/309959861/detail.aspx?size=469130040",
                                    },
                                ],
                                [
                                    {
                                        label: "6.74",
                                        href: "https://www.wildberries.am/catalog/309959862/detail.aspx?size=469130041",
                                    },
                                    {
                                        label: "7.74",
                                        href: "https://www.wildberries.am/catalog/309959863/detail.aspx?size=469130042",
                                    },
                                    {
                                        label: "8.74",
                                        href: "https://www.wildberries.am/catalog/309959864/detail.aspx?size=469130043",
                                    },
                                    {
                                        label: "5.77",
                                        href: "https://www.wildberries.am/catalog/309959865/detail.aspx?size=469130044",
                                    },
                                    {
                                        label: "6.77",
                                        href: "https://www.wildberries.am/catalog/309959866/detail.aspx?size=469130045",
                                    },
                                    {
                                        label: "7.77",
                                        href: "https://www.wildberries.am/catalog/309959868/detail.aspx?size=469130047",
                                    },
                                    {
                                        label: "8.77",
                                        href: "https://www.wildberries.am/catalog/309959867/detail.aspx?size=469130046",
                                    },
                                ],
                                [
                                    {
                                        label: "5.35",
                                        href: "https://www.wildberries.am/catalog/309959869/detail.aspx?size=469130048",
                                    },
                                    {
                                        label: "6.35",
                                        href: "https://www.wildberries.am/catalog/309959870/detail.aspx?size=469130049",
                                    },
                                    {
                                        label: "7.35",
                                        href: "https://www.wildberries.am/catalog/309959871/detail.aspx?size=469130050",
                                    },
                                    {
                                        label: "8.35",
                                        href: "https://www.wildberries.am/catalog/309959872/detail.aspx?size=469130051",
                                    },
                                    {
                                        label: "6.73",
                                        href: "https://www.wildberries.am/catalog/309959873/detail.aspx?size=469130052",
                                    },
                                    {
                                        label: "7.73",
                                        href: "https://www.wildberries.am/catalog/309959874/detail.aspx?size=469130053",
                                    },
                                    {
                                        label: "8.77",
                                        href: "https://www.wildberries.am/catalog/309959867/detail.aspx?size=469130046",
                                    },
                                ],
                                [
                                    {
                                        label: "6.71",
                                        href: "https://www.wildberries.am/catalog/309959876/detail.aspx?size=469130055",
                                    },
                                    {
                                        label: "7.71",
                                        href: "https://www.wildberries.am/catalog/309959877/detail.aspx?size=469130056",
                                    },
                                    {
                                        label: "8.71",
                                        href: "https://www.wildberries.am/catalog/309959878/detail.aspx?size=469130057",
                                    },
                                    {
                                        label: "7.72",
                                        href: "https://www.wildberries.am/catalog/309959879/detail.aspx?size=469130058",
                                    },
                                    {
                                        label: "8.72",
                                        href: "https://www.wildberries.am/catalog/309959880/detail.aspx?size=469130059",
                                    },
                                    {
                                        label: "9.72",
                                        href: "https://www.wildberries.am/catalog/309959881/detail.aspx?size=469130060",
                                    },
                                ],
                                [
                                    {
                                        label: "7.12",
                                        href: "https://www.wildberries.am/catalog/309959882/detail.aspx?size=469130061",
                                    },
                                    {
                                        label: "8.12",
                                        href: "https://www.wildberries.am/catalog/309959883/detail.aspx?size=469130062",
                                    },
                                    {
                                        label: "9.12",
                                        href: "https://www.wildberries.am/catalog/309959884/detail.aspx?size=469130063",
                                    },
                                    {
                                        label: "7.21",
                                        href: "https://www.wildberries.am/catalog/310039593/detail.aspx?size=469283253",
                                    },
                                    {
                                        label: "8.21",
                                        href: "https://www.wildberries.am/catalog/310039594/detail.aspx?size=469283254",
                                    },
                                    {
                                        label: "9.21",
                                        href: "https://www.wildberries.am/catalog/310039595/detail.aspx?size=469283255",
                                    },
                                ],
                            ].map((row, i) => (
                                <div className={style.row}
                                     key={i}
                                >
                                    {
                                        row.map(({label, href}, j) => (
                                          <a href={href}
                                             key={j}
                                             className={style.link}
                                             target="_blank"
                                          >
                                              <p>{label}</p>
                                          </a>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PalettePage