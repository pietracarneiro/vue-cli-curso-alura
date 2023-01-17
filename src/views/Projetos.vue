<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <!--ouvindo o evento submit do botão Salvar, o .prevent já recarrega a página ao submeter um formulário - tudo isso linkado com o method salvar -->
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
        <!-- v-model está sendo linkado com a variável nomeDoProjeto e o id está linkado com o for da label acima -->
      </div>
      <div class="field">
        <button class="button" type="submit">
          <!-- o type="submit" permite que o click no botão submeta o fomrulário que contém um @submit ouvindo o evento  -->
          Salvar
        </button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <!--utilizando a classe do bulma table para estilizar uma tabela-->
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id"> <!--iteração do array de projetos - a key ajuda a controlar a renderização da lista-->
          <td>{{ projeto.id }}</td> <!--com a iteração é possível pegar cada elemento do array projetos e listá-los-->
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProjeto from "../interfaces/IProjeto";

export default defineComponent({
  // defineComponent é uma função que RECEBE um objeto de configuração
  name: "Projetos",
  data() {
    // estado do componente, é uma função que RETORNA um objeto com o estado do componente
    return {
      nomeDoProjeto: "",
      projetos: [] as IProjeto[], // criando um array de projetos do tipo IProjeto[] que tbm é um array
    };
  },
  methods: {
    salvar() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto, // this.nomeDoProjeto está vinculado com o input e vai ser associado a  string nome do IProjeto
        id: new Date().toISOString(), // toISOString vai servir para simular um id gerado genericamente, vai pegar timestamp contendo hora/seg/min do momento que o projeto foi criado
      };
      this.projetos.push(projeto); // adicionando o projeto ao array/lista de projetos
      this.nomeDoProjeto = ""; // limpando o input de projeto após a adição do novo projeto na linha acima
    },
  },
});
</script>

<style scoped>
/* o scoped serve para que as propriedades setadas nesse script
   style não vaze para outros templates */
.projetos {
  padding: 1.25rem;
}
</style>
