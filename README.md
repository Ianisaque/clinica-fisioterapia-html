# Pilates Vital

Site institucional para um estúdio de pilates, feito com HTML, CSS e JavaScript puro. O projeto nasceu como um desafio do curso Formação HTML Web Developer e foi refeito depois, com foco em layout, acessibilidade e responsividade. A página inicial segue o formato de página de captação: faixas de conteúdo, chamadas para o WhatsApp e formulário de agendamento.

<!-- Quando publicar no GitHub Pages, adicione aqui:
🔗 **Site no ar:** https://ianisaque.github.io/clinica-fisioterapia-html/
![Prévia do site Pilates Vital](docs/preview.png)
-->

## Páginas

- **Página Inicial:** apresentação, modalidades, diferenciais, depoimento e formulário de agendamento.
- **Sobre:** missão, visão e valores da clínica.
- **Horário de Atendimento:** tabela de horários por modalidade e explicação de cada tipo de pilates.
- **Contato:** telefone, e-mail, mapa e formulário de contato.

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`)
- CSS3 com variáveis de cor, Flexbox e Grid
- JavaScript puro, usado no menu e nos formulários

## Decisões do projeto

- **Navegação adaptável:** os links ficam visíveis no cabeçalho em telas grandes. Em telas menores, viram um painel lateral aberto por um botão, com fechamento por ×, clique fora ou tecla `Esc`, `aria-expanded` e foco gerenciado.
- **Responsivo:** o layout se adapta a computador, tablet e celular, sem rolagem horizontal, e no celular há um botão fixo de WhatsApp.
- **Paleta em variáveis CSS** (`:root`), baseada na cor da logo, o que facilita mudar o tema.
- **Acessibilidade:** rótulos ligados aos campos, tabela com cabeçalhos de linha e coluna, contraste conferido nos botões e textos, e `aria-current` na página atual.
- **Desempenho:** imagens otimizadas (a logo caiu de 250 KB para cerca de 9 KB e a foto do depoimento de 2,2 MB para cerca de 160 KB).
- **Compartilhamento:** meta tags Open Graph, para o link aparecer com título e imagem no WhatsApp e em redes sociais.

## Estrutura

```
├── index.html
├── sobre.html
├── horario.html
├── contato.html
├── css/base.css
├── js/
│   ├── menu.js
│   └── formularios.js
└── img/
```

## Observações

- Os formulários são **simulados**: mostram uma mensagem de confirmação, mas não enviam dados, porque o site não tem servidor.
- Telefone, e-mail e endereço são de exemplo, para fins de portfólio.

## Como rodar localmente

```bash
git clone https://github.com/Ianisaque/clinica-fisioterapia-html.git
cd clinica-fisioterapia-html
```

Abra o `index.html` no navegador ou use a extensão Live Server no VS Code.

## Autor

**Ian Isaque Rabêlo Barros**  
[GitHub](https://github.com/Ianisaque)
