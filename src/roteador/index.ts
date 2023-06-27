import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import Projetos from '../views/Projetos.vue';
import Formulario from "../views/Projetos/Formulario.vue";
import Lista from "../views/Projetos/Lista.vue"

// Array de rotas, uma visualização para cada rota
const rotas: RouteRecordRaw[] = [
    {
        path: '/', // o caminho da rota
        name: 'Tarefas', // nome do caminho da rota
        component: Tarefas // template que será exibido quando se seguir o caminho '/Tarefas'
    }, 
    {
        path: '/projetos', // aninhando as rotas
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Lista',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projetos',
                component: Formulario,
                props: true
            },
        ]
    }
] 


const roteador = createRouter({  
    history: createWebHashHistory(), // ajuda a confirgurar e controlar as rotas
    routes: rotas
})


export default roteador;