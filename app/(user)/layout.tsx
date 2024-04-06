import type { Metadata } from "next";
import "@/app/global.css"
import NarbarComponent from "@/component/navbar/NavbarComponent";
import FooterComponent from "@/component/footer/FooterComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { localCustomFont } from "./fonts";


export const metadata: Metadata = {
	title: "Mini Project CRUD NEXT SEO",
	description: "Mini Project CRUD NEXT SEO",
	openGraph: {
		title: "Mini Project CRUD NEXT SEO",
		description:
			"This is the Next Mini project with seo.",
		images: "https://i.pinimg.com/564x/cb/d5/3a/cbd53aef77e857da2a21cfed2cba14ca.jpg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localCustomFont.variable} flex flex-col min-h-screen`}>
        <header>
          <NarbarComponent/>
        </header>      
        <Suspense fallback={<Loading/>}>
          <main className="flex-grow"> 
            {children}
          </main>
        </Suspense>
        <FooterComponent/>
      </body>
    </html>
  );
}
