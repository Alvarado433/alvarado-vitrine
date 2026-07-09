import { listaIcones } from "@/Backend/Icone/lista";

type IconeProps = {
  nome: string;
};

export default function Icone({ nome }: IconeProps) {
  const item = listaIcones.find((icone) => icone.nome === nome);

  if (!item) {
    return null;
  }

  const IconeEscolhido = item.icone;

  return <IconeEscolhido />;
}
