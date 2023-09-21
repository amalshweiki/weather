import useFetch from "../hooks/useFetch";
import { useState,useEffect } from "react";
const Favorites = () => {
  const favoriteFromLocalStorage = JSON.parse(localStorage.getItem('favorite'));
  const [urls,setUrls]=useState()

  return (
    <div>
     {/* {favoriteFromLocalStorage.map((favorit)=>{
      setURL(`https://api.openweathermap.org/data/2.5/weather?q=${favorit}&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49`)
    console.log(data)
    })} */}
    </div>
  )
}

export default Favorites
