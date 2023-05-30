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

## VUEX
-  É muito interessante utilizar o Vuex, ele é um mix de padrão de gerenciamento de projeto e biblioteca, então ele une os dois, tanto o padrão quanto uma forma de implementação dessa forma, dessa gestão de estado. Ele vai cuidar da aplicação, do estado da aplicação, como uma fonte única de verdade.

- Se eu quero, no nosso caso, uma lista de projetos, é lá que eu vou pegar. Se eu quero adicionar um projeto novo, é através da mutação. Então é tudo muito bem controlado e bem previsível. Se eu quero entender como um projeto novo foi criado, eu vou em um único lugar, na minha fonte de verdade.

- Mas nem tudo são flores, utilizando o Vuex. Repare que para ter uma coisa simples, vamos supor que agora vamos alterar um projeto ou excluir um projeto, nós teremos que ficar sempre implementando uma mutation para cada operação. É um pouco mais verboso cuidar da nossa aplicação utilizando esse padrão, ou seja, nós precisaremos escrever um pouco mais de código.

- Tendo isso em vista, é bom conhecermos algumas alternativas. Nem sempre o Vuex pode ser aquela bala de prata, ou toda aplicação vai precisar do Vuex. Nós temos, principalmente agora, com o Vue na versão 3, boas alternativas que você pode conhecer, estudar e ver qual é a melhor situação, dado um cenário.

- A primeira coisa que podemos pensar é no store pattern. O store pattern é um padrão de armazenamento que cria variáveis reativas. Nós podemos, de repente em um cenário simples, nós podemos utilizar essas variáveis reativas ao invés de trazer tudo para dentro da store, para dentro do Vuex.

- Além disso, temos um provide/inject, nós criamos um provedor. Tudo o que disponibilizamos neste provedor nós podemos injetar em qualquer um dos filhos dele, não importando na geração, então aquele lance de fazer prop drilling, passa do pai para o filho, para o neto, só porque o neto precisa, nós não precisamos mais fazer isso, temos uma alternativa.

- Se você der uma olhada na documentação, você vai ver como você pode implementar esse provide/inject, não é o nosso caso aqui. E, por último, tem a Pinia, outra forma, outra biblioteca que implementa o padrão de gerenciamento de estado.

- Você pode, ao invés de utilizar o Vuex, você usar o Pinia. Ele tem uma abordagem um pouco diferente, se você ainda não conhece, recomendo você dar uma olhada, dar uma passada de olho, é sempre bom termos o nosso cinto de utilidades sempre bem cheio, para sabermos escolher melhor o que vamos usar em cada situação.

- Aqui, no nosso curso, vamos usar o Vuex, ele vai atender bem às nossas necessidades, de forma que a organização das nossas tarefas e projetos fique bem tranquila e bem coesa. Nós seguiremos usando o Vuex, mas não deixe de conhecer e dar uma passada de olho no que esses outros métodos fazem.

- Dê uma olhada nas variáveis reativas, no provide/inject e no Pinia. Coloque esses métodos no seu radar, no seu cinto de ferramentas, para você estar sempre antenado e saber escolher a melhor opção para o melhor cenário.