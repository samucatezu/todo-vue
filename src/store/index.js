import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [
      {
        id: 1,
        titulo: "Tarefa 1",
        descricao: "Descrição da tarefa 1",
        concluido: false,
      },
      {
        id: 2,
        titulo: "Tarefa 2",
        descricao: "Descrição da tarefa 1",
        concluido: false,
      },
      {
        id: 3,
        titulo: "Tarefa 3",
        descricao: "Descrição da tarefa 1",
        concluido: false,
      },
    ],
  },
  getters: {},
  mutations: {
    adicionarTarefa(state, titulo) {
      if (titulo) {
        state.push({
          id: new Date().getTime(),
          titulo,
          descricao: "",
          concluido: false,
        });
        this.inpultField = null;
      }
    },
    excluirTarefa(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
  },
  actions: {},
  modules: {},
});
