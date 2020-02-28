// isto é um caixinha
const initialState = {
    tarefasNaoFinalizadas: [],
    tarefasFinalizadas: [],
};

export default (state = initialState, action) => {

    // action vai posibilitar a alteração do state
    switch (action.type) {
        case 'NAO_FINALIZADA':
            return { ...state, tarefasNaoFinalizadas: action.payload.tarefasNaoFinalizadas };
            break;
        case 'ESTA_FINALIZADA':
            return { ...state, tarefasFinalizadas: action.payload.tarefasFinalizadas };
            break;
    }

    return state;
}