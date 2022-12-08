import {BiSearchAlt2} from 'react-icons/bi'

const SearchBar = () =>{
    return(
        <div className='search-container'>
            <form action="" className="search-bar">
            <input className="bar" type="text" placeholder="search"/>
            <button type="submit"><BiSearchAlt2/></button>
            </form>
        </div>
    )
} 

export default SearchBar