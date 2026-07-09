import Footer from "@/components/Site/Footer/footer";
import Header from "@/components/Site/header/Header/topo";
import Menu from "@/components/Site/Menu/menu";
import WhatsAppFlutuante from "@/components/Site/WhatsAppFlutuante/whatsappFlutuante";
import Link from "next/link";

const categorias = [
  {
    nome: "Roupas",
    descricao: "Camisetas, bonés, acessórios e peças para o dia a dia.",
    quantidade: "Produtos selecionados",
  },
  {
    nome: "Presentes",
    descricao: "Opções especiais para datas comemorativas e lembranças.",
    quantidade: "Ideias para presentear",
  },
  {
    nome: "Canecas",
    descricao: "Canecas personalizadas, criativas e modelos exclusivos.",
    quantidade: "Modelos personalizados",
  },
  {
    nome: "Acessórios",
    descricao: "Itens úteis, criativos e complementos para sua compra.",
    quantidade: "Produtos variados",
  },
];

export default function CategoriasPage() {
  return (
    <main className="pagina">
      <Header />
      <Menu />

      <section className="paginaCategorias">
        <div className="categoriasTexto">
          <p>Categorias</p>

          <h1>Encontre produtos por tipo</h1>

          <span>
            Veja as principais categorias disponíveis no catálogo e escolha o
            produto ideal para você.
          </span>
        </div>

        <div className="categoriasGrid">
          {categorias.map((categoria) => (
            <article className="categoriaCard" key={categoria.nome}>
              <div>
                <strong>{categoria.nome}</strong>
                <p>{categoria.descricao}</p>
              </div>

              <span>{categoria.quantidade}</span>

              <Link href="/" className="categoriaLink">
                Ver produtos
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}
