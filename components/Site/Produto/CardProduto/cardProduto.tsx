import Icone from "@/components/reutilizavel/Icone/Icone";
import Image from "next/image";
import Link from "next/link";

type CardProdutoProps = {
  nome: string;
  slug: string;
  categoria: string;
  descricao: string;
  preco: string;
  imagem: string;
};

export default function CardProduto({
  nome,
  slug,
  categoria,
  descricao,
  preco,
  imagem,
}: CardProdutoProps) {
  return (
    <article className="cardProduto">
      <div className="cardProdutoImagem">
        <Image src={imagem} alt={nome} width={300} height={220} />
      </div>

      <div className="cardProdutoInfo">
        <span>{categoria}</span>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>{preco}</strong>

        <Link href={`/produto/${slug}`} className="botao botaoProduto">
          <Icone nome="olho" />
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
