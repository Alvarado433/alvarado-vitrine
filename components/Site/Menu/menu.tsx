"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    nome: "Início",
    href: "/",
  },
  {
    nome: "Categorias",
    href: "/categorias",
  },
  {
    nome: "Sobre nós",
    href: "/sobre",
  },
  {
    nome: "Contato",
    href: "/contato",
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="menu">
      {links.map((link) => {
        const estaAtivo =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`menuLink ${estaAtivo ? "menuLinkAtivo" : ""}`}
          >
            {link.nome}
          </Link>
        );
      })}
    </nav>
  );
}
