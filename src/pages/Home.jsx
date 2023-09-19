import React, { useState } from "react";
const Home = () => {
    const [search,setSearch]=useState('jerusalem')
  return (
    <div>
         <input type='' value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase)}/>
         <button>search</button>
    </div>
    
   
  )
}

export default Home
