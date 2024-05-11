import { Login } from 'src/model/types/Login';
import { positive } from 'src/utils/alerta';
import { ref } from 'vue';
import router from 'src/router';
const loading = ref(false)
const autenticacaoLocal = (dados: Login) => {
    console.log(dados)
    router.push('/')
    positive('Seja bem-vindo!')
}
const autenticacaoGoogle = () => {
    router.push('/')
    positive('Seja bem-vindo!')
}
export { autenticacaoLocal, autenticacaoGoogle, loading }