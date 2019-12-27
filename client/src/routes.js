import Login from './components/pages/login/Login.vue';
import EmailSender from './components/pages/emailsender/EmailSender.vue';
import Cadastro from './components/pages/cadastro/Cadastro.vue';
import CadastroTemplete from './components/pages/cadastro_template/CadastroTemplate.vue';
import Home from './components/pages/home/Home.vue'
import Usuario from './components/pages/usuario/Usuario.vue'
import Doacoes from './components/pages/donates/Donates.vue'

export const routes = [

    { path: '', component: Home },
    { path: '/login', component: Login },
    { path: '/usuario', component: Usuario },
    { path: '/emailsender' , component: EmailSender},
    { path: '/cadastro', component: Cadastro},
    { path: '/cadastrotemplete', component: CadastroTemplete},
    { path: '/doacoes', component: Doacoes}

];
