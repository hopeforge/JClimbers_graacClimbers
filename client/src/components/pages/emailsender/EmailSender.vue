<template>
    <div>
        <appNavBar></appNavBar>
        <h3 class="titulo">Cadastro de Template</h3>
        <div class="sender">
            <b-container class="bv-example-row ">
                <b-row class="containerTemplate">
                    <b-col>
                        <b-container class="bv-example-row ">
                            <h4 class="titulo">Corpo do Email</h4>
                            <b-row class="containerTemplate">
                                <b-col><appTextAreaMail></appTextAreaMail></b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col>
                        <b-container class="bv-example-row ">
                            <b-row class="containerTemplate">
                                <b-col><appScrollTemplates></appScrollTemplates></b-col>
                            </b-row>
                            <div>
                                <b-button variant="success">Salvar</b-button>
                                <b-button variant="danger">Apagar</b-button>
                            </div>
                        </b-container>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import TextAreaMail from '../../shared/textarea/TextAreaMail.vue'
import ScrollTemplates from '../../shared/scrolltemplates/ScrollTempletes.vue'
import NavBar from '../../shared/navbar_tools/NavBarTools.vue'
export default {
    components: {
        appTextAreaMail : TextAreaMail,
        appScrollTemplates : ScrollTemplates,
        appNavBar : NavBar
    }
}
</script>

<style scoped>
.bv-example-row{
    
}

.containerTemplate {
    padding-top: 15px;
    padding-bottom: 5%;
}

.titulo {
    background-color: rgb(187, 187, 238);
    text-align: center;
}

</style>