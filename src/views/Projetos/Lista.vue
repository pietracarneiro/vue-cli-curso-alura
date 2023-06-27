<template>
    <section>
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <!--utilizando a classe do bulma table para estilizar uma tabela-->
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <!--iteração do array de projetos - a key ajuda a controlar a renderização da lista-->
                    <td>{{ projeto.id }}</td>
                    <!--com a iteração é possível pegar cada elemento do array projetos e listá-los-->
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    // defineComponent é uma função que RECEBE um objeto de configuração
    name: "Projetos",
    setup() {
        // disponibilizando e retornando a store para utilizar no nosso componente
        const store = useStore()
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script>
  