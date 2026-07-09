import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerMarca">
        <h2>
          Alvarado<span>Vitrine</span>
        </h2>

        <p>Catálogo digital para pequenos negócios.</p>
      </div>

      <div className="footerLinks">
        <Link href="/">Início</Link>
        <Link href="/categorias">Categorias</Link>
        <Link href="/sobre">Sobre nós</Link>
        <Link href="/contato">Contato</Link>
      </div>

      <div className="footerContato">
        <strong>Atendimento</strong>
        <p>WhatsApp: (11) 94951-6737</p>
        <p>São Paulo - SP</p>
      </div>
    </footer>
  );
}