"use client";

import { useState } from "react";

import { produtos } from "@/Backend/produto/produtos";
import Categorias from "../Categoria/categorias";
import CardProduto from "./CardProduto/cardProduto";

type ProdutosProps = {
  busca?: string;
};

export default function Produtos({ busca = "" }: ProdutosProps) {
  const [categoriaAtual, setCategoriaAtual] = useState("Todos");

  const buscaFormatada = busca.trim().toLowerCase();

  const produtosFiltrados = produtos.filter((produto) => {
    const textoProduto = `
      ${produto.nome}
      ${produto.categoria}
      ${produto.descricao}
      ${produto.preco}
    `.toLowerCase();

    const passouNaBusca = textoProduto.includes(buscaFormatada);

    const passouNaCategoria =
      categoriaAtual === "Todos" || produto.categoria === categoriaAtual;

    return passouNaBusca && passouNaCategoria;
  });

  return (
    <section className="produtos">
      <div className="produtosTopo">
        <div>
          <p>Produtos</p>
          <h2>Destaques da vitrine</h2>
        </div>
      </div>

      <Categorias
        categoriaAtual={categoriaAtual}
        aoSelecionarCategoria={setCategoriaAtual}
      />

      <div className="produtosLista">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              slug={produto.slug}
              categoria={produto.categoria}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))
        ) : (
          <p className="semProdutos">Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
}
