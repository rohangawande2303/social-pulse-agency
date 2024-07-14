import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Social Pulse Agency ",
  // "Grow Your Business Online with Social Pulse - Top Digital Marketing Agency",
  description:
    "Need a proven digital marketing strategy? Social Pulse Agency offers data-driven SEO, social media, web design & more to attract new customers, boost website traffic & sales. Free Consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SG5WVR4TYV"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SG5WVR4TYV');
            `,
          }}
        />
        {/* Vercel Analytics */}
        <VercelAnalytics />
        {children}
      </body>
    </html>
  );
}

// import { Analytics } from "@vercel/analytics/react";

// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

// const font = Poppins({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title:
//     "Grow Your Business Online with Social Pulse - Top Digital Marketing Agency",
//   description: "Need a proven digital marketing strategy? Social Pulse Agency offers data-driven SEO, social media, web design & more to attract new customers, boost website traffic & sales. Free Consultation!",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning={true} className={font.className}>
//         <Analytics />
//         {children}
//       </body>
//     </html>
//   );
// }
