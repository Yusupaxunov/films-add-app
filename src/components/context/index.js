import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
    data: [],
    term: '', 
    filter: 'All'
}

export const Context = createContext()

const reducer = (state = initialValue, action) => {
    const {type, payload} = action
    switch (type) {
        case 'GET_DATA':
            return {...state, data: payload}
        case 'ON_DELETE':
             const deleteArr = state.data.filter(c => c.id !== payload)
             return {...state, data: deleteArr}
        case 'ON_TOGGLE_FAV':
            const {id} = payload;
            const favouriteArr = state.data.map(item => {
                if (item.id === id) {
                  return{...item, favourite: !item.favourite}
                }
                return item
            })
            return {...state, data: favouriteArr}
        case 'ADD_FORM':
            const {name, view} = payload
            const addFormArr = {name:name, view:view, id: uuidv4()}
            return {...state, data: [...state.data, addFormArr]} 
        case 'TERM':
            return {...state, term: payload}
        case 'FILTER':
            return {...state, filter: payload}
        default:
            return {state}
    }
}
 
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return(
        <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    )
}

export default Provider;