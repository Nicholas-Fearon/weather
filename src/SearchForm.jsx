import { useState, useEffect } from "react";
export default function SearchForm() {
    const [results, setResults] = useState("")
   const [location, setLocation] = useState("")
   const [temp, setTemp] = useState("");
   const [icon, setIcon] = useState("");
   const [condition, setCondition] = useState("");
    const [region, setRegion] = useState("");


useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=8f1eda0869be45db9e4122137221203&q=London&aqi=no
    `)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setLocation(data.location.name)
        setTemp(data.current.temp_c)
        setIcon(data.current.condition.icon)
        setCondition(data.current.condition.text)
        setRegion(data.location.region)
        
    })
    .catch(error => {
        console.error(error,"Results not found")
    })
},[]);

   function handleformsubmit(e) {
    e.preventDefault();
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=8f1eda0869be45db9e4122137221203&q=${results}&aqi=no
    `)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setLocation(data.location.name)
        setTemp(data.current.temp_c)
        setIcon(data.current.condition.icon)
        setCondition(data.current.condition.text)
        setRegion(data.location.region)
        
    })
    .catch(error => {
        console.error(error,"Results not found")
    })
    
    setResults("");
    
   }

   return <form onSubmit={handleformsubmit} >
    <div className="flex items-center justify-center h-screen">
        
        <div className="text-black bg-blue-300  font-bold rounded-lg border shadow-lg p-10">
        
            <input onChange={e => setResults(e.target.value)} className="p-2 rounded mb-4" type="text" 
            id="SearhForm" 
            value={results}
            placeholder="Enter location">
            </input>

            <input type="submit" 
            
            value="search"
            className="text-center ml-4 bg-transparent border
             border-black hover:border-white text-white
              hover:text-black font-bold py-2 px-4 rounded-full"
            />
            <div className="flex items-center justify-center">
                <div className="text-white">
                    <p>{location},</p>
                    <p>{region}</p>
                    <p>{temp} °C</p>
                    <img src={icon}></img>
                    <p>{condition}</p>
                </div>
            
            </div>
           </div>
           
    </div>
    
        
            
       
    </form>
    
}