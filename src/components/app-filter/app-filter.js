import { useContext } from 'react';
import '../app-filter/app-filter-css.css';
import { Context } from '../context';

const AppFilter = () => {

  const {state, dispatch} = useContext(Context)

  return (
    <div className='btn-group'>
      {arrBtns.map(btn => (
        <button onClick={() => dispatch({type: 'FILTER', payload: btn.name})} key={btn.name} 
        className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}>{btn.label}</button>
      ))}
    </div>

  )
}

const arrBtns = [
  {
    name:'All',
    label:'Barcha filmlar'
  },
  {
    name:'popular',
    label:'Mashxur filmlar'
  },
  {
    name:'mostViewed',
    label:'Eng ko\'p korilgan filmlar'
  }
]

export default AppFilter;