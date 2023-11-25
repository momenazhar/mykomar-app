import LocalFont from "next/font/local";
import { Providers } from "./providers";
import { SLayout } from "./styles";

const inter = LocalFont({
    src: [
        { path: "../public/fonts/InterVariable.ttf" },
        {
            path: "../public/fonts/InterVariable-Italic.ttf",
            style: "italic",
        },
    ],
    display: "swap",
});

export const metadata = {
    title: "MyKomar",
    description: "The Student Dashboard of Komar University",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon-16x16.png"
                />
            </head>
            <body className={inter.className}>
                <Providers>
                    <SLayout>{children}</SLayout>
                </Providers>
            </body>
        </html>
    );
}
