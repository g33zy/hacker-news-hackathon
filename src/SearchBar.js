import React from 'react'


function SearchBar(props) {
  return (
    <div>
        <form style={{padding: "16px, 144px, 16px, 54px"}}>
            <input type='text' placeholder='search' onChange={props.handleChange}></input>
        </form>
        <select onChange={props.handleSort} id="articles">
            <option value="title">title</option>
            <option value="author">author</option>
            <option value="date">date</option>
            
        </select>

    </div>
    
  )
}

export default SearchBar