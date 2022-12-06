import { useContext } from 'react'
import { Context } from '../context'
import '../movieListItem/movie-list-item-css.css'

const ListItems = (props) => {
    const {name, view, favourite, id} = props

    const {state, dispatch} = useContext(Context)

    const onDelete = () => {
        dispatch({type: 'ON_DELETE', payload: id })
    }

    const onToggleFavourite = () => {
        const payload = {id: id}
        dispatch({type: 'ON_TOGGLE_FAV', payload})
    }

    return (
        <div>
            <li className={`list-items ${favourite && "favourite"} `}>
                <span className='item-title'>{name}</span>
                <input type="number" readOnly className='view-num' defaultValue={view}/>
                <div className='buttons'>
                    <button className='trash' onClick={onDelete}>
                        <i className='fas fa-trash'></i>
                    </button>
                    <button className='star' onClick={onToggleFavourite}>
                        <i className='fas fa-star'></i>
                    </button>
                </div>
            </li>
        </div>
        )
}


export default ListItems;