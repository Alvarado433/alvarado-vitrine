type CategoriasProps = {
  categoriaAtual: string;
  aoSelecionarCategoria: (categoria: string) => void;
};

const categorias = ["Todos", "Roupas", "Presentes", "Canecas", "Acessórios"];

export default function Categorias({
  categoriaAtual,
  aoSelecionarCategoria,
}: CategoriasProps) {
  return (
    <div className="categorias">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => aoSelecionarCategoria(categoria)}
          className={categoriaAtual === categoria ? "categoriaAtiva" : ""}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
