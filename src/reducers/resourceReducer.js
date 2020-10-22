import resourceService from '../services/resourceService'

const resourceReducer = (state=[], action) => {
    switch(action.type){
        case'create-resource':
            return [...state, action.data]
        case'init':
            return action.data
        default: 
            return state
    }
}

export const createNote = (data) => {
    return async dispatch => {
        const response = await resourceService.createNew(data, 'notes')
        dispatch({
            type: 'create-resource',
            data: response
        })
    }
}

export const initialiseNotes = () => {
    return async dispatch => {
        const response = await resourceService.getAll('notes')
        dispatch({
            type: 'init',
            data: response
        })
    }
}

export default resourceReducer
