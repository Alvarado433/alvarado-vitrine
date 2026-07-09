import Image from "next/image";
import Barra from "../Barra/barra";
import WhatsAppHeader from "../redesocial/whatsappHeader";

type HeaderProps = {
  busca?: string;
  aoBuscar?: (valor: string) => void;
};

export default function Header({ busca, aoBuscar }: HeaderProps) {
  return (
    <header className="header">
      <div className="headerLogo">
        <Image
          src="/logo.png"
          alt="Logo AlvaradoVitrine"
          width={48}
          height={48}
        />

        <div>
          <h1 className="headerTitulo">
            Alvarado<span className="headerspan">Vitrine</span>
          </h1>

          <p className="headerDescricao">Catálogo digital</p>
        </div>
      </div>

      <Barra valor={busca} aoBuscar={aoBuscar} />

      <WhatsAppHeader />
    </header>
  );
}
