<template>
  <div>
    <appNavBar></appNavBar>
    <h3 class="titulo">Doações</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Nome do Doador"
        label-for="input-1"
        required>
        <b-form-input
          id="input-1"
          v-model="doador.nome"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="doador.cpf"
          required
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="E-mail" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="doador.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Telefone" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="doador.telefone"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import NavBar from '../../shared/navbar_tools/NavBarTools.vue';
  export default {
    components: {
      appNavBar : NavBar
    },
    data() {
      return {
        doador: {
          nome: '',
          cpf: '',
          email: '',
          telefone: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.doador))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.doador.nome = ''
        this.doador.cpf = ''
        this.doador.email = ''
        this.doador.telefone = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>



<style scoped>
.form{
  padding: 15px, 15px, 15px, 15px;
}

.titulo {
    background-color: rgb(187, 187, 238);
    text-align: center;
}
</style>
