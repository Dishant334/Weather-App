import "./SearchBox.css"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function SearchBox({updateInfo}){
  let[city,setCity]=useState("")
  let[error,setError]=useState(false)
const API_URL =   "https://api.openweathermap.org/data/2.5/weather";
const API_KEY =   "6999c8a1e36fd2e65d73373e666a6cc9"

let getWEatherInfo =async ()=>{
    try{
   let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let JsonResult= await response.json();
    console.log(JsonResult)
    let result= {
        city: city,
        temp: JsonResult.main.temp,
        tempMin: JsonResult.main.temp_min,
        tempMax:JsonResult.main.temp_max,
        humidity:JsonResult.main.humidity,
        feelsLike: JsonResult.main.feels_like,
        weather: JsonResult.weather[0].description
    }
    console.log(result)
    return result
}
catch(err){
    throw err
}
}


let handleChange=(event)=>{
     setCity(event.target.value)
}
let handleSubmit= async (event)=>{
    try{
    event.preventDefault();
    console.log(city);
    let newInfo=await getWEatherInfo();
    updateInfo(newInfo)
    setCity("");
    }
    catch(err){
     setError(true)
    }
   
}

   return (
    <div className="SearchBox">
        <h1 className="Heading">Search for the Weather</h1>
        <br />
        <form onSubmit={handleSubmit} >
             <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange} autoComplete="off"/>
             <br /><br />
              <Button variant="contained" type="submit">
        Search
      </Button>
             <br />
             {error && <p style={{color : "red"}}>No such place exist</p>}
        </form>
    </div>
   )    
}