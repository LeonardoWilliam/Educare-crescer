# Educare & Crescer — Site Institucional

Site institucional completo da Educare & Crescer: reforço escolar, preparatórios e concursos, e atendimento psicológico. Feito em HTML, CSS e JavaScript puro (sem frameworks, sem build).

## Estrutura do projeto

```
Educare-crescer/
│
├── index.html
├── style.css
├── script.js
│
├── img/
│   ├── logo.png
│   ├── alunos.jpg
│   ├── criancas-1.jpg
│   └── criancas-2.jpg
│
└── README.md
```

## Como colocar no ar pelo GitHub Pages

1. Crie um repositório novo no GitHub (ex: `educare-crescer`).
2. Envie todos os arquivos desta pasta para o repositório, mantendo a mesma estrutura (o `index.html` precisa ficar na raiz).
   - Pelo site do GitHub: botão **Add file → Upload files**, arraste tudo (inclusive a pasta `img`) e faça o commit.
   - Ou pelo terminal:
     ```bash
     git init
     git add .
     git commit -m "Site Educare & Crescer"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/educare-crescer.git
     git push -u origin main
     ```
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Deploy from a branch**, branch `main`, pasta `/root`, e clique em **Save**.
5. Em alguns minutos o GitHub mostra o link do site, algo como:
   `https://SEU-USUARIO.github.io/educare-crescer/`
6. (Opcional) Em **Settings → Pages → Custom domain**, você pode apontar um domínio próprio (ex: educareecrescer.com.br) para essa página.

## Editar conteúdo

- Textos e estrutura: `index.html`
- Cores, fontes e layout: `style.css`
- Menu mobile, animações e efeito de rolagem: `script.js`
- Fotos e logo: arquivos dentro de `img/`
- Número de WhatsApp: procure por `5521974043443` no `index.html` e substitua em todos os lugares.
- Instagram: procure por `educ.areecrescer`.

## Observações

- O site é 100% estático (não precisa de servidor, banco de dados ou backend).
- Já está otimizado para celular, com menu hambúrguer, botão flutuante de WhatsApp e SEO básico (title, meta description, dados estruturados Schema.org).
