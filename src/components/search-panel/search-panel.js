import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../context';
import '../search-panel/search-css.css'

const SearchPanel = () => {
  const [term, setTerm] = useState('')

  const { dispatch} = useContext(Context)

  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({type: 'TERM', payload: term})
  }

  return (
    <div>
      <input type="text" className="form-control search-input" 
    placeholder="Filmni qidirish..." onChange={updateTermHandler} value={term}/>
    </div>
  )
}

export default SearchPanel;
