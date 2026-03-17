'use client'

import style from "./CatalogComponent.module.scss"
import {brands, catalogData, categories, ICatalogItem} from "../data";
import {Card} from "./Card/Card";
import {useState} from "react";
import {Dropdown} from "./Dropdown/Dropdown";
import {svgIcons} from "../../../assets/svgIcons";
import {Pagination} from "./Pagination/Pagination";
import {Popup} from "./Popup/Popup";

export const CatalogComponent = () => {

    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1)

    const itemsPerPage = 12;

    const selectedData  = [...catalogData]
        .filter(el => brand ? el.brand === brand : true)
        .filter(el => category ? el.category === category : true)

    const dataOnPage = selectedData.filter((el, key) => ((key + 1) > itemsPerPage * (page - 1)) && ((key + 1)) <= itemsPerPage * page)

    const pages = Math.ceil(selectedData.length / itemsPerPage);

    const [showPopup, setShowPopup] = useState(false);
    const [popupProduct, setPopupProduct] = useState<null | ICatalogItem>(null)

    return (
        <div className={style.catalogComponent}>
            <div className={style.inner}>

                <div className={style.header}>
                    <p>{(brand || category) ? "Выбрано" : "Все товары"}</p>
                    <p>{selectedData.length} шт.</p>
                </div>

                <div className={style.filtersWrapper}>

                    <div className={style.filters}>
                        <Dropdown label="Название бренда"
                                  value={brand}
                                  values={brands}
                                  onSelect={value => {
                                      setPage(1);
                                      setBrand(value);
                                  }}
                        />
                        <Dropdown label="Категория"
                                  value={category}
                                  values={categories}
                                  onSelect={value => {
                                      setPage(1);
                                      setCategory(value);
                                  }}
                                  className={style.dropdown}
                        />
                    </div>

                    {
                        (brand || category) && (
                            <div className={style.selected}>
                                {
                                    brand && (
                                        <button className={style.selectedBtn}
                                                onClick={() => {
                                                    setPage(1);
                                                    setBrand("");
                                                }}
                                        >
                                            <p>{brand}</p>
                                            {svgIcons.close}
                                        </button>
                                    )
                                }
                                {
                                    category && (
                                        <button className={style.selectedBtn}
                                                onClick={() => {
                                                    setPage(1);
                                                    setCategory("");
                                                }}
                                        >
                                            <p>{category}</p>
                                            {svgIcons.close}
                                        </button>
                                    )
                                }
                            </div>
                        )
                    }

                </div>

                <div className={style.cards}>
                    <div className={style.cards_inner}>
                        {
                            [...dataOnPage].map((card, key) => (
                                <Card key={key}
                                      product={card}
                                      onMoreDetailsHandler={() => {
                                          setShowPopup(true);
                                          setPopupProduct(card)
                                      }}
                                />
                            ))
                        }
                    </div>
                </div>

                {
                    dataOnPage.length > 0 && (
                        <Pagination page={page}
                                    pages={pages}
                                    className={style.pagination}
                                    onPage={(page) => setPage(page)}
                        />
                    )
                }

                {
                    showPopup && popupProduct && (
                        <Popup product={popupProduct as ICatalogItem}
                               onClose={() => setShowPopup(false)}
                        />
                    )
                }

            </div>
        </div>
    )
}