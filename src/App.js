import './App.css';
import { useState} from 'react';
import axios from 'axios';
import Form from './component/Form';
import Nav from './component/Nav';
//import {Route,Link} from "react-router-dom"


function App() {
  const [query,setQuery] = useState({})
  const [city,setCity] = useState("")
  
       
   const searchQuery = () => {
        
    const apiKey = "65fde9389972e2f9b7c6efdae7228a73"
    const units ="metric"
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

          
            
        axios.get(apiCall)
          .then(response=> {
          const data = response.data
          setQuery(data)
          
         
          console.log(query)})
          .catch(err=>console.log(err.message))
}
        const handleChange = (e)=>{
             setCity(e.target.value)
        }
     
     


return (
    
    
    <div className="App">
       
      {(typeof query.main!= "undefined")?(
      <div> 
        

        <div className = {query.weather[0].description ==="clear sky"?"clear-sky":query.weather[0].description ==="rainy"?"rainy":"container"}>
          <Nav />
          <div className = "weather">
             <div className="main">
                    <div className="main-details">
                          <h2 className ="place">{query.name}</h2>
                          <h5>{query.weather[0].description}</h5>
                          <img src={`http://openweathermap.org/img/wn/${query.weather[0].icon}.png`} alt="Weather-icon"/>
                          <h1>{Math.round(query.main.temp)}°</h1>
                          <p>Feel like {Math.round(query.main.feels_like)}° celsuis</p>
             
                    </div> 
             </div> 

             <div className="dashboard"> 
                   
                   <ul className="details">
                       <div className="row"> 
                           <li className="card">
                               <img src="../images/humidity.png" alt="humidity" />
                               <h3>Humidity</h3>
                               <h1>{query.main.humidity}%</h1>
                           </li>

                           <li className="card">
                               <img src="../images/wind_speed.png" alt="wind-speed" />
                               <h3>Wind-speed</h3>
                               <h1>{query.wind.speed}m/s</h1>
                          </li>

                          <li className="card">
                               <img src="../images/compass.png" alt="wind-direction" />
                               <h3>Wind-direction</h3>
                               <h1>{query.wind.deg}°</h1>
                          </li>
                    </div> 


                     <div className="row">
                           <li className="card">
                              <img src="../images/visibility.png" alt="visibility" />
                              <h3>Visibility</h3>
                              <h1>{query.visibility}km</h1>
                           </li>

                           <li className="card">
                               <img src="../images/sunrise.png" alt="sunrise" />
                               <h3>Sunrise</h3>
                               <h1>{ new Date(query.sys.sunrise).toLocaleTimeString('en-US')}</h1>
                          </li>

                           <li className="card">
                               <img src="../images/sunset.png" alt="sunset" />
                               <h3>Sunset</h3>
                               <h1>{ new Date(query.sys.sunset).toLocaleTimeString('en-US')}</h1>
                           </li>
                     </div>
                  </ul>
     
     
     </div> 




          </div>
         

             
             
    
    
     
    </div> 

      </div>):(<Form 
          searchQuery ={searchQuery} 
          handleChange={handleChange}
          city ={city}
          query={query}

          />)}

          
          
           
             
           
           
           
           

    
    </div>
  );
}

export default App;
