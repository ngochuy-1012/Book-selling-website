import React, {useState} from 'react'
import {Link} from'react-router-dom';

const FormSearch = ({getTextSearch}) => {
    var [value, setValue] = useState('');
    const handleOnChange = (e) => {
        const text = e.target.value.trim();
        console.log(text);
        setValue(text)
        getTextSearch(value)
    }
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="form-inline "  >
            <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" onChange ={handleOnChange} />
            <button className="btn btn-outline-success my-2 my-sm-0"type= "button" onClick = {()=>{getTextSearch(value)}} >Tìm kiếm</button>
        </div>
        <Link to="/create-news" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tạo</Link>
    </nav>
    )
}

export default FormSearch
