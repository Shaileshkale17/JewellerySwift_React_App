import React from 'react'

function search(setsearch) {
// Adding reudx to search results
  return (
    <div>
       <form>
        <label htmlFor="search">Search item</label>
        <input type="search" name="search" id="search" onChange={setsearch}/>
       </form>
    </div>
  )
}

export default search
