import {Metadata} from "next";
import {CatalogComponent} from "./CatalogComponent/CatalogComponent";

export const metadata: Metadata = {
    title: "MIK'ANGELO - Каталог",
    description: "MIK'ANGELO - это магазин красоты, вдохновлённый символом ангела",
};
const CatalogPage = () => {
    return (
        <>
            <CatalogComponent/>
        </>
    )
}

export default CatalogPage