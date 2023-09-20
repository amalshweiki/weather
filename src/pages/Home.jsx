import { useState , useRef} from "react";
import useFetch from "../hooks/useFetch";
const Home = () => {
    const [search,setSearch]=useState('jerusalem')
    const [clickedButton,setClickedButton]=useState(true)
    const [url,setURL]=useState('https://api.openweathermap.org/data/2.5/weather?q=jerusalem&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49')
    const {data,loading,error}=useFetch(url);
    // const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");
    // if(loading)return <div> Loadiing </div>
    // if(error) return <div> error </div>
    // if(data) return <div> {data} </div>
    const inputRef = useRef();
    const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
      
      };
      const handleClick = (e) => {
        e.preventDefault();
        setURL(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49`)
        setClickedButton(true);
        
       
      };
      
  return (
    <div>
      <form>
        <input type='' value={search} ref={inputRef} onChange={handleChange}/>
       <button onClick={handleClick} >search</button>
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
       
       {/* {setClickedButton(false)} */}
     </div>) :
      (<p>No data available</p> )
      }
    </div>
     )}   
    </div>
    
   
  )
}

export default Home
