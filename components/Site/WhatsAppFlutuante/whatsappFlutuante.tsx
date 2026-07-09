import Icone from "@/components/reutilizavel/Icone/Icone";
import Link from "next/link";

export default function WhatsAppFlutuante() {
  const numeroWhatsApp = "5511949516737";

  const mensagem =
    "Olá, vim pelo catálogo digital e gostaria de mais informações.";

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem,
  )}`;

  return (
    <Link
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappFlutuante"
      aria-label="Falar no WhatsApp"
    >
      <Icone nome="whatsapp" />
      <span>Fale conosco</span>
    </Link>
  );
}
