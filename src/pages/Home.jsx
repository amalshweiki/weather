import { useState , useRef} from "react";
import useFetch from "../hooks/useFetch";
const Home = () => {
    const [search,setSearch]=useState('jerusalem')
    const [clickedButton,setClickedButton]=useState(true)
    const [url,setURL]=useState('https://api.openweathermap.org/data/2.5/weather?q=jerusalem&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49')
    const {data,loading,error}=useFetch(url);
   const [favorite,setFavorite]=useState([]);
   localStorage.setItem('favorite', JSON.stringify(favorite));
    const inputRef = useRef();
    {console.log(favorite)}
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
      
      };
      const handleClick = (e) => {
        e.preventDefault();
        setURL(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49`)
        setClickedButton(true);
      };
      const handleFavorite =(e) =>{
        e.preventDefault();
        setFavorite([...favorite, search]);
        console.log(favorite)
      }
  return (
    <div>
      <form>
        <input type='' value={search} ref={inputRef} onChange={handleChange}/> 
       <button onClick={handleClick} >search</button> <br/>
       <button onClick={handleFavorite} >Add this City to favorite</button>
     
      </form>
       {clickedButton && (
       <div>
       {loading && <p>Loading...</p>}
       {/* {error && <p>Error: {error.message}</p>} */}
       {data && typeof data === "object" ? (
       <div>
       <h2> {data.name}</h2>
       <p>Temperature: {data.main.temp} °C</p>
       <p>Weather: {data.weather[0].description}</p>
       </div>) :
      (<p>No data available</p> )
       }
     </div>
     )} 
       
    </div>
    
   
  )
  
}

export default Home
