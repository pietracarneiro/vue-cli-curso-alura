// Responsável por defeinir o estado do projeto

import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface Estado {
    projetos:IProjeto[]
}

// Configurando chave de acesso da store 
// Sempre que o componente pedir acesso à store ele precisa passar a chave
export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        // lista de projetos que serão adicionado e estarão no input select
        projetos: []
    }, 
    // objeto que vai receber várias funções que tem o poder de adicionar coisas ao estado.
    mutations: {
        // o nome das mutações são em caixa alta por conveção
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
            // objeto literal do tipo IProjeto
            // cujo valor vai receber a data com o new Date e o nomeDoProjeto(parametro)
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            // adicionando o projeto por meio do push
            state.projetos.push(projeto)
        }
    }
})


export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}