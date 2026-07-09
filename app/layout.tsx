import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlvaradoVitrine | Catálogo Digital",
  description:
    "Catálogo digital moderno para pequenos negócios apresentarem produtos e receberem pedidos pelo WhatsApp.",
  keywords: [
    "catálogo digital",
    "vitrine online",
    "produtos",
    "WhatsApp",
    "loja virtual",
    "AlvaradoVitrine",
  ],
  authors: [
    {
      name: "AlvaradoTech",
    },
  ],
  openGraph: {
    title: "AlvaradoVitrine | Catálogo Digital",
    description:
      "Uma vitrine online simples, bonita e profissional para pequenos negócios.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="main-vitrie">{children}</body>
    </html>
  );
}
