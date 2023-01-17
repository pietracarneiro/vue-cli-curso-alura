# alura-tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### CSS

#### Bulma.io
- Nesse projeto foi utilizado um framework com CSS externo que permite setar estilizações automaticamente de acordo com o nome do seletor

- Para adicionar o Bulma podemos entrar no site bulma.io, em “Documentação > Overview > Start” e temos um link para importar. Vou copiar esse link e colar dentro do nosso “index.html”, logo abaixo do title. E temos o Bulma CSS disponível para nós.

#### Font Awesome
- O Font Awesome, tem vários ícones legais para utilizar. Quando se precisa de um de play e stop e um ícone que representa um relógio, por exemplo. E precisamos instalar este pacote @fortawesome/fontawesome-free. Então no terminal vamos fazer npm i --save-dev @fortawesome/fontawesome-free e com isso ele vai ficar disponível para nós.

-  Pegar o import do CSS, dar um “Ctrl + C” e vamos no “main.ts” fazer um import do CSS do Font Awesome: import ‘@fortawesome/fontawesome-free/css/all.css’. E então teremos todos os ícones disponíveis para nós.
