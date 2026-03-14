import {Metadata} from "next";
import {FirstBlock} from "./_HomePage/FirstBlock/FirstBlock";
import {AboutUs} from "./_HomePage/AboutUs/AboutUs";
import {Brands} from "./_HomePage/Brands/Brands";
import {Reviews} from "./_HomePage/Reviews/Reviews";
import {News} from "./_HomePage/News/News";
import {Catalog} from "./_HomePage/Catalog/Catalog";
import {Contacts} from "./_HomePage/Contacts/Contacts";

export const metadata: Metadata = {
    title: "MIK'ANGELO - Главная страница",
    description: "MIK'ANGELO - это магазин красоты, вдохновлённый символом ангела",
};


const HomePage = () => {
    return (
        <>
            <FirstBlock/>
            <AboutUs/>
            <Catalog/>
            <Brands/>
            <News/>
            <Reviews/>
            <Contacts/>
        </>
    );
}

export default HomePage
