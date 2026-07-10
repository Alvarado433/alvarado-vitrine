import Icone from "@/components/reutilizavel/Icone/Icone";

export default function WhatsAppHeader() {
  return (
    <div className="whatsappHeader">
      <span>
        {" "}
        <Icone nome="whatsapp" />
      </span>

      <div>
        <strong>(11) 94951-6737</strong>
        <p>Atendimento via WhatsApp</p>
      </div>
    </div>
  );
}
