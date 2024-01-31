import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const [search, setSearch] = useState('');
const [filtered, setFiltered] = useState(fruits);

useEffect(()=>{
  setFiltered(fruits.filter((item) => (
     item.toLowerCase().includes(search.trim().toLowerCase())
  )))
},[search])


  return (
    <div>
      <h1>Search item</h1>
      <input type="text" placeholder="search.." onChange={(e) => setSearch(e.target.value)}/>
      <ul>
          {
            filtered.map((item)=>(
              <li>{item}</li>
            ))
          }
      </ul>
    </div>
  )
}

export default App
