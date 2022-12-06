import { useContext, useEffect, useState} from 'react';
import '../app/App.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import MoviesList from '../moviesList/moviesList';
import MovieAddForm from '../movieAddForm/movie-add-form';
import { Context } from '../context';


const App = () => {

  const {_, dispatch} = useContext(Context)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
    .then(response => response.json())
    .then(json => {
      const newArr = json.map(item => ({
        name: item.title,
        id: item.id,
        view: item.id * 1500,
        favourite: false
      }))
      dispatch({type:'GET_DATA', payload: newArr})
    })
    .catch(err => console.log(err))
  }, [])
  

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MoviesList />
          <MovieAddForm />
      </div>
    </div>
  )
}
export default App;

