import Botao from "@/components/reutilizavel/Botao/botao";

export default function Banner() {
  return (
    <section className="banner">
      <div>
        <p>Catálogo digital com WhatsApp</p>

        <h2>
          Mostre seus produtos.
          <br />
          Receba pedidos pelo WhatsApp.
        </h2>

        <p>Uma vitrine online simples e profissional para pequenos negócios.</p>

        <Botao className="botaoBanner">Ver produtos</Botao>
      </div>
    </section>
  );
}
