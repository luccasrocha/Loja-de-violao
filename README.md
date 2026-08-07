#  Loja de Instrumentos | Violões

Landing page responsiva para uma loja fictícia de violões, com catálogo de produtos, filtros por categoria, carrinho de compras interativo e formulário de contato. Desenvolvida com **HTML, CSS e JavaScript puros** (vanilla), sem frameworks ou bibliotecas externas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📖 Sobre o projeto

O site simula uma loja online especializada em violões, apresentando:

- Uma seção **hero** de apresentação com chamada para ação;
- Um **catálogo de produtos** dinâmico, renderizado via JavaScript a partir de um array de dados;
- **Filtros** por tipo de corda (aço, nylon) e por modelo eletroacústico;
- Um **carrinho de compras** funcional (modal), com contagem de itens e cálculo de total;
- Uma seção **sobre** a loja, destacando diferenciais;
- Um **formulário de contato**;
- **Menu responsivo** (hambúrguer) para dispositivos móveis;
- Sistema de **notificações toast** para feedback ao usuário.

---

## 🗂️ Estrutura de arquivos

```
📦 loja-de-instrumentos
├── index.html      # Estrutura HTML da página
├── style.css       # Estilização e responsividade
├── script.js       # Lógica de interação (produtos, carrinho, filtros etc.)
└── README.md        # Este arquivo
```

---

## ✨ Funcionalidades

### 🛍️ Catálogo de produtos
Os produtos são armazenados em um array de objetos JavaScript (`produtos`) e renderizados dinamicamente no DOM, cada um contendo nome, descrição, preço, categoria, imagem e um selo (badge) opcional como "Mais vendido" ou "Novo".

### 🔍 Sistema de filtros
Permite filtrar os violões exibidos por categoria:
- **Todos**
- **Cordas de aço**
- **Cordas de nylon**
- **Eletroacústico**

### 🛒 Carrinho de compras
- Adição de produtos com um clique;
- Contador de itens no ícone do carrinho;
- Modal com lista de itens adicionados e valor total, formatado em **Real (BRL)** via `toLocaleString`.

### 📱 Menu responsivo
Menu de navegação que se transforma em um botão hambúrguer em telas menores, com abertura/fechamento animado.

### 🔔 Notificações (Toast)
Mensagens temporárias exibidas na tela ao adicionar produtos ao carrinho ou enviar o formulário de contato.

### ✉️ Formulário de contato
Formulário simples com campos de nome, e-mail e mensagem, com validação HTML nativa (`required`) e feedback visual via toast ao ser enviado.

---

## 🎨 Design

O layout segue uma identidade visual em tons de **roxo**, com gradientes, sombras suaves e efeitos de destaque (glow), criando uma atmosfera moderna e elegante, adequada ao universo musical. As variáveis de cor, fonte e espaçamento são centralizadas em `:root` no arquivo `style.css`, facilitando futuras customizações.

O projeto é **totalmente responsivo**, com breakpoints para:
- Tablets (`max-width: 900px`)
- Celulares grandes (`max-width: 720px`)
- Celulares pequenos (`max-width: 400px`)

---

## 🚀 Como executar o projeto

Por ser um projeto estático (sem back-end ou dependências), basta:

1. Baixar ou clonar os arquivos (`index.html`, `style.css`, `script.js`) mantendo-os na mesma pasta;
2. Abrir o arquivo `index.html` diretamente no navegador;

ou, alternativamente, rodar um servidor local simples, por exemplo:

```bash
# usando Python
python3 -m http.server 8000

# usando Node.js (http-server)
npx http-server
```

E então acessar `http://localhost:8000` no navegador.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica da página |
| CSS3 | Estilização, variáveis, grid, flexbox e media queries |
| JavaScript (ES6+) | Manipulação do DOM, eventos e lógica do carrinho/filtros |

---

## 📌 Possíveis melhorias futuras

- Persistência do carrinho com `localStorage`;
- Integração com um back-end real para pagamentos e envio de formulário;
- Página de detalhes individual para cada produto;
- Testes automatizados de interface;
- Otimização de imagens e lazy loading avançado.

---

## ⚠️ Aviso

Este projeto foi desenvolvido para fins de **atividade acadêmica/educacional**, com o objetivo de praticar conceitos de HTML, CSS e JavaScript. **Todo o conteúdo (código e este README) foi gerado com o auxílio de Inteligência Artificial.**
