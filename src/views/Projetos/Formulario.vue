<template>
  <section>
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  // defineComponent é uma função que RECEBE um objeto de configuração
  name: "Projetos",
  props: {
    id: {
      type: String
    }
  },
  mounted () { // montando o componente
    if(this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    // estado do componente, é uma função que RETORNA um objeto com o estado do componente
    return {
      nomeDoProjeto: ""
      // projetos: [] as IProjeto[], // criando um array de projetos do tipo IProjeto[] que tbm é um array
    };
  },
  methods: {
    salvar() {
      // criando e editando o projeto com a store e a mutation recebendo o nome do projeto vinculado com o input do formulário
      if(this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = ""; // limpando o input de projeto após a adição do novo projeto na linha acima
      this.store.commit(NOTIFICAR, {
        titulo: 'Novo projeto foi salvo',
        texto: 'Prontinho ;) seu projeto já está disponível.',
        tipo:TipoNotificacao.SUCESSO
      })
      this.$router.push('/projetos'); 
      
    },
  },
  setup () {
    // disponibilizando e retornando a store para utilizar no nosso componente
    const store = useStore()
    return {
      store
    }
  }
});
</script>
