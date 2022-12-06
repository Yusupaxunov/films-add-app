import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../context';
import '../movieAddForm/movie-add-form-css.css'

const MovieAddForm = () => {

  const [state, setState] = useState({name: '', view: ''})

  const {dispatch} = useContext(Context)

  const changeHandler = (e) => {
    setState({...state,[e.target.name]: e.target.value})
  }

  const addFormHandler = (e) => {
    e.preventDefault()
    if (state.name === '' || state.view === '') return alert('fill the input')
    const formData = {name: state.name, view: state.view}
    dispatch({type: 'ADD_FORM', payload: formData});
    setState({
      name: '',
      view: ''
    })
  }

  return (
    <div className='movie-add-form'>
        <h3>MovieAddForm</h3>
        <form className='add-form d-flex' onSubmit={addFormHandler}>
            <input type="text" className='form-control new-post-label' placeholder="Qanday kino?" onChange={changeHandler} name='name' value={state.namename}/>
            <input type="number" className='form-control new-post-label' placeholder="Necha marotaba ko'rilgan?" onChange={changeHandler} name='view' value={state.view}/>
            <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
        </form>
    </div>
  )
}

export default MovieAddForm;