import resourceService from '../services/resourceService'

const personReducer = (state=[], action) => {
    switch(action.type){
        case'CREATE-PERSON':
            return [...state, action.data]
        case'INIT':
            return action.data
        default:
            return state
    }
}

export const createPerson = data => {
    return async dispatch => {
        const response = await resourceService.createNew(data,'persons')
        dispatch({
            type: 'CREATE-PERSON',
            data: response
        })
    }
}

export const initialisePersons = () => {
    return async dispatch => {
        const response = await resourceService.getAll('persons')
        dispatch({
            type: 'INIT',
            data: response
        })
    }
}

export default personReducer