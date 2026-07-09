"use client";

import { useState } from "react";

import Banner from "@/components/Site/Banner/Banner";
import Beneficios from "@/components/Site/Beneficios/beneficios";
import Footer from "@/components/Site/Footer/footer";
import Header from "@/components/Site/header/Header/topo";
import Menu from "@/components/Site/Menu/menu";
import Produtos from "@/components/Site/Produto/produtos";
import WhatsAppFlutuante from "@/components/Site/WhatsAppFlutuante/whatsappFlutuante";

export default function Home() {
  const [busca, setBusca] = useState("");

  return (
    <main className="pagina">
      <Header busca={busca} aoBuscar={setBusca} />
      <Menu />
      <Banner />
      <Beneficios />
      <Produtos busca={busca} />
      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}