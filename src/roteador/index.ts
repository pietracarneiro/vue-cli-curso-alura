import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import Projetos from '../views/Projetos.vue';

// Array de rotas, uma visualização para cada rota
const rotas: RouteRecordRaw[] = [
    {
    path: '/', // o caminho da rota
    name: 'Tarefas', // nome do caminho da rota
    component: Tarefas // template que será exibido quando se seguir o caminho '/Tarefas'
    }, 
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
] 


const roteador = createRouter({  
    history: createWebHashHistory(), // ajuda a confirgurar e controlar as rotas
    routes: rotas
})


export default roteador;