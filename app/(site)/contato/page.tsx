import Footer from "@/components/Site/Footer/footer";
import Header from "@/components/Site/header/Header/topo";
import Menu from "@/components/Site/Menu/menu";
import WhatsAppFlutuante from "@/components/Site/WhatsAppFlutuante/whatsappFlutuante";

export default function ContatoPage() {
  return (
    <main className="pagina">
      <Header />
      <Menu />

      <section className="paginaContato">
        <div>
          <p>Entre em contato</p>
          <h1>Fale com a nossa equipe</h1>
          <span>
            Tire dúvidas, peça informações ou solicite um orçamento pelo
            WhatsApp.
          </span>
        </div>

        <div className="contatoCards">
          <article>
            <strong>WhatsApp</strong>
            <p>(11) 94951-6737</p>
          </article>

          <article>
            <strong>Localização</strong>
            <p>São Paulo - SP</p>
          </article>

          <article>
            <strong>Atendimento</strong>
            <p>Segunda a sábado, das 9h às 18h</p>
          </article>
        </div>
      </section>

      <Footer />
      <WhatsAppFlutuante />
    </main>
  );
}
