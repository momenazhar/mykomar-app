import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SLayout } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MyKomar",
    description: "Built by Next App",
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
