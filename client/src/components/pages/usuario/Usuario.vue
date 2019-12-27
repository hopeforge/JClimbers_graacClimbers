<template>
  <div>
    <appNavBar></appNavBar>
    <h3 class="titulo">Cadastro de Parceiro</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Nome Fantasia"
        label-for="input-1"
        required>
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Razão Social" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Site do Parceiro" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import NavBar from '../../shared/navbar_tools/NavBarTools'
  export default {
    components: {
      appNavBar : NavBar
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
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
