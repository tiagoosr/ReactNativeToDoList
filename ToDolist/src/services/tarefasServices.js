import axios from 'axios';
const url = "https://tarefas-test.herokuapp.com/tarefas";


const getTarefa = () =>{
    return axios.get(url);
}

const cadastrarTarefas = (tarefa) =>{
    return axios.post(url, tarefa);
}


export default { 
    getTarefa,
    cadastrarTarefas
 }