const searchHandler = (arr, term) => {
    if(term.lenght === 0){
      return arr
      }
      return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }
  
  
  
  const filterHandler = (arr,  filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.favourite)
        case 'mostViewed':
          return arr.filter(c => c.view > 3000)
          default:
            return arr
    }
  }

  export {searchHandler, filterHandler}