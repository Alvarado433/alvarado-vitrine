import { produtos } from "@/Backend/produto/produtos";
import Icone from "@/components/reutilizavel/Icone/Icone";
import Footer from "@/components/Site/Footer/footer";
import Header from "@/components/Site/header/Header/topo";
import Menu from "@/components/Site/Menu/menu";
import WhatsAppFlutuante from "@/components/Site/WhatsAppFlutuante/whatsappFlutuante";
import Image from "next/image";
import Link from "next/link";

type ProdutoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const { slug } = await params;

  const produto = produtos.find((item) => item.slug === slug);

  if (!produto) {
    return (
      <main className="pagina">
        <Header />
        <Menu />

        <section className="produtoDetalhe">
          <div className="produtoDetalheInfo">
            <h1>Produto não encontrado</h1>
            <p>Esse produto não existe ou foi removido do catálogo.</p>

            <Link href="/" className="botao botaoProduto">
              Voltar para o catálogo
            </Link>
          </div>
        </section>

        <Footer />
        <WhatsAppFlutuante />
      </main>
    );
  }

  const numeroWhatsApp = "5511949516737";

  const mensagem = `
Olá, tenho interesse neste produto:

Produto: ${produto.nome}
Preço: ${produto.preco}
Categoria: ${produto.categoria}

Pode me passar mais informações?
`.trim();

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem,
  )}`;

  return (
    <main className="pagina">
      <Header />
      <Menu />

      <Link href="/" className="voltarCatalogo">
        ← Voltar para o catálogo
      </Link>

      <section className="produtoDetalhe">
        <div className="produtoDetalheImagem">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            width={600}
            height={450}
          />
        </div>

        <div className="produtoDetalheInfo">
          <span>{produto.categoria}</span>

          <h1>{produto.nome}</h1>

          <strong>{produto.preco}</strong>

          <p>{produto.descricao}</p>

          <Link
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botaoWhatsAppProduto"
          >
            <Icone nome="whatsapp" />
            Pedir no WhatsApp
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}
