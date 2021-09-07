import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const SearchBox = () => {

    const history = useHistory()
    
    const [keyword, setKeyword] = useState('')

    const handleChange = event => {
        setKeyword(event.target.value)
    }       

    const handleSearch = () => {
        // console.log(keyword);
        history.push(`/product/search?${keyword}`)
        setKeyword('')
    }
    const handleKeyDown = event => {
        if (event.keyCode === 13){
            handleSearch()
        }
    }
    return (
        <div className="searchBox">
            <input className="searchInput"type="text" value={keyword} name="keyword" placeholder="Search" onChange = {handleChange} onKeyDown = {handleKeyDown}/>
            <button className="searchButton" href="#" onClick={() => handleSearch()}>
                <i className="bx bx-search"></i>
            </button>
        </div>
    )
}

export default SearchBox
