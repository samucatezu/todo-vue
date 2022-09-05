<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="inpultField"
        label="Nova tarefa"
        outlined
        clearable
        @keyup.enter="addTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-subheader>General</v-subheader>

      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/tarefas/Tarefa.vue";
export default {
  name: "Home",

  components: {
    Tarefa,
  },
  data() {
    return {
      inpultField: "",
    };
  },
  methods: {
    addTarefa() {
      this.$store.commit("adicionarTarefa", this.inpultField);
      this.inpultField = null;
    },
  },
};
</script>
