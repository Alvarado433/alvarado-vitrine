# AlvaradoVitrine

Catálogo digital desenvolvido com **Next.js**, criado para pequenos negócios apresentarem seus produtos de forma simples, moderna e profissional, com contato direto pelo WhatsApp.

## Sobre o projeto

O **AlvaradoVitrine** é uma vitrine online responsiva, pensada para lojas, vendedores, autônomos e pequenos negócios que querem divulgar produtos sem precisar de um sistema complexo.

O cliente consegue visualizar os produtos, pesquisar, filtrar por categoria, abrir os detalhes e chamar diretamente no WhatsApp para fazer o pedido.

---

## Funcionalidades desenvolvidas

- Página inicial moderna
- Header com logo, nome da marca e campo de busca
- Menu de navegação
- Banner principal
- Área de benefícios
- Listagem de produtos
- Cards de produto
- Página individual de detalhes do produto
- Busca de produtos funcionando
- Filtro por categorias funcionando
- Botão de pedido pelo WhatsApp
- Mensagem automática personalizada no WhatsApp
- Botão flutuante do WhatsApp
- Página Sobre nós
- Página Contato
- Página Categorias
- Footer profissional
- Menu com item ativo conforme a página
- Layout responsivo para celular, tablet e iPhone
- SEO básico configurado

---

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- CSS puro
- React Icons
- Vercel

---

## Estrutura principal do projeto

```txt
app/
  page.tsx
  layout.tsx
  contato/
    page.tsx
  sobre/
    page.tsx
  categorias/
    page.tsx
  produto/
    [slug]/
      page.tsx

components/
  Site/
    Banner/
    Beneficios/
    Categoria/
    Footer/
    Header/
    Menu/
    Produto/
    WhatsAppFlutuante/
  reutilizavel/
    Botao/
    Icone/

Backend/
  produto/
    produtos.ts

styles/
  site/
    banner.css
    beneficios.css
    botao.css
    categorias-page.css
    contato.css
    footer.css
    header.css
    menu.css
    produto.css
    produto-detalhe.css
    sobre.css
    whatsapp-flutuante.css
  responsividade.css
  variables.css
  reset.css
```

---

## Páginas do projeto

### Início

Página principal com apresentação da vitrine, benefícios, busca, categorias e produtos em destaque.

### Categorias

Página com os principais tipos de produtos disponíveis no catálogo.

### Sobre nós

Página explicando a proposta do catálogo digital e para quem ele é indicado.

### Contato

Página com informações de atendimento, localização e WhatsApp.

### Produto

Página dinâmica por produto, acessada pelo slug.

Exemplo:

```txt
/produto/camiseta-basica
```

---

## Busca e filtro

O projeto possui busca funcional por:

- Nome do produto
- Categoria
- Descrição
- Preço

Também possui filtro por categorias:

- Todos
- Roupas
- Presentes
- Canecas
- Acessórios

---

## WhatsApp

Cada produto possui botão de pedido pelo WhatsApp com mensagem automática.

Exemplo da mensagem:

```txt
Olá, tenho interesse neste produto:

Produto: Camiseta Básica
Preço: R$ 49,90
Categoria: Roupas

Pode me passar mais informações?
```

Também existe um botão flutuante fixo para contato rápido.

---

## Responsividade

O layout foi ajustado para funcionar bem em:

- Desktop
- Notebook
- Tablet
- Celular
- iPhone Pro Max
- iPhone comum
- iPhone menor
- Celulares pequenos

No mobile, o menu fica rolável e o botão flutuante do WhatsApp vira apenas o ícone.

---

## SEO básico

O projeto possui metadados configurados no `layout.tsx`, incluindo:

- Título do site
- Descrição
- Palavras-chave
- Autor
- Open Graph básico

Título utilizado:

```txt
AlvaradoVitrine | Catálogo Digital
```

Descrição utilizada:

```txt
Catálogo digital moderno para pequenos negócios apresentarem produtos e receberem pedidos pelo WhatsApp.
```

---

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:3000
```

---

## Build de produção

Para testar se o projeto está pronto para produção:

```bash
npm run build
```

Para iniciar em produção:

```bash
npm start
```

---

## Deploy

O projeto pode ser publicado na Vercel.

Fluxo recomendado:

```txt
Projeto local → GitHub → Vercel
```

Passos gerais:

1. Criar um repositório no GitHub.
2. Subir o projeto para o GitHub.
3. Entrar na Vercel.
4. Importar o repositório.
5. Fazer o deploy.
6. Testar o link online.

---

## Comandos Git recomendados

```bash
git init
git add .
git commit -m "primeira versao da alvarado vitrine"
git branch -M main
git remote add origin https://github.com/seuusuario/alvarado-vitrine.git
git push -u origin main
```

Antes de subir, confira se existe `.gitignore` com pelo menos:

```txt
node_modules
.next
.env
.env.local
```

---

## Melhorias futuras

- Adicionar imagens reais dos produtos
- Criar painel administrativo
- Integrar com banco de dados
- Criar cadastro de produtos
- Criar sistema de estoque
- Criar página 404 personalizada
- Adicionar Instagram e redes sociais
- Adicionar compartilhamento de produto
- Adicionar mais animações no layout

---

## Status do projeto

Versão atual: **MVP funcional e apresentável**

O projeto já possui as principais funcionalidades de um catálogo digital:

- Navegação
- Busca
- Filtro
- Detalhe do produto
- WhatsApp
- Responsividade
- Páginas institucionais
- SEO básico

---

## Autor

Desenvolvido por **AlvaradoTech Soluções Digitais**.

Projeto criado como catálogo digital profissional para pequenos negócios.
