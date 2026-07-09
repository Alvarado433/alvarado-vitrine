type BotaoProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Botao({
  children,
  className = "",
  type = "button",
}: BotaoProps) {
  return (
    <button type={type} className={`botao ${className}`}>
      {children}
    </button>
  );
}