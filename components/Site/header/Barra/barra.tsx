"use client";

import { useState } from "react";

type BarraProps = {
  valor?: string;
  aoBuscar?: (valor: string) => void;
};

export default function Barra({ valor, aoBuscar }: BarraProps) {
  const [valorLocal, setValorLocal] = useState("");

  const valorAtual = valor ?? valorLocal;

  function mudarBusca(novoValor: string) {
    if (aoBuscar) {
      aoBuscar(novoValor);
      return;
    }

    setValorLocal(novoValor);
  }

  return (
    <div className="headerBusca">
      <input
        type="text"
        value={valorAtual}
        onChange={(evento) => mudarBusca(evento.target.value)}
        placeholder="Buscar produtos..."
      />
    </div>
  );
}
