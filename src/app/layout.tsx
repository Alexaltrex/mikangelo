import type {Metadata} from "next";
import "./globals.css";
import {AppContainer} from "./components/App/AppContainer";

export const metadata: Metadata = {
    title: "MIK'ANGELO",
    description: "MIK'ANGELO - это магазин красоты, вдохновлённый символом ангела",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <AppContainer>
            {children}
        </AppContainer>
        </html>
    );
}
