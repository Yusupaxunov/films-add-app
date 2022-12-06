import '../moviesList/moviesListCss.css';
import ListItems from '../movieListItem/movie-list-item';
import { filterHandler, searchHandler } from '../../utility/data';
import { useContext } from 'react';
import { Context } from '../context';

const MoviesList = () => {

  const {state} = useContext(Context)
  
  const data = filterHandler(searchHandler(state.data, state.term), state.filter)



  return (
    <ul className='movie-list'>
      {
        data.map((item) => (
          <ListItems key={item.id} name={item.name} view={item.view} id={item.id} 
          favourite={item.favourite}/>
        ))
      }
      
    </ul>
  )
}

export default MoviesList;