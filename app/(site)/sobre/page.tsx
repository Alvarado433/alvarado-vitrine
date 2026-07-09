import Footer from "@/components/Site/Footer/footer";
import Header from "@/components/Site/header/Header/topo";
import Menu from "@/components/Site/Menu/menu";
import WhatsAppFlutuante from "@/components/Site/WhatsAppFlutuante/whatsappFlutuante";

export default function SobrePage() {
  return (
    <main className="pagina">
      <Header />
      <Menu />

      <section className="paginaSobre">
        <div className="sobreTexto">
          <p>Sobre nós</p>

          <h1>Uma vitrine digital simples, bonita e profissional.</h1>

          <span>
            O AlvaradoVitrine foi criado para ajudar pequenos negócios a
            apresentarem seus produtos de forma organizada e receberem pedidos
            diretamente pelo WhatsApp.
          </span>
        </div>

        <div className="sobreCards">
          <article>
            <strong>Catálogo online</strong>
            <p>Produtos organizados em uma página moderna e responsiva.</p>
          </article>

          <article>
            <strong>Pedido pelo WhatsApp</strong>
            <p>O cliente vê o produto e chama direto para comprar.</p>
          </article>

          <article>
            <strong>Ideal para pequenos negócios</strong>
            <p>Perfeito para lojas, vendedores, autônomos e prestadores.</p>
          </article>
        </div>
      </section>

      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}