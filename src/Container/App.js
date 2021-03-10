import Header from './Header'
import Section1 from './Section1'
import {useState, useEffect} from 'react';

function App() {

  const [weather, setWeather] = useState({location: "", Temp: "", icon :""})

  useEffect( ()=>{
    fetch("http://api.weatherapi.com/v1/forecast.json?key=28ac2907b80d44e487c65115211003&q=Hyderabad&days=1&aqi=no&alerts=no").
    then(res => res.json()).
    then(data => {
      console.log(data.forecast.forecastday[0].day.maxtemp_c,data.location.name,data)
      
        setWeather({location : data.location.name,
          Temp: data.forecast.forecastday[0].day.maxtemp_c,
          icon: data.current.condition.icon })
        // console.log(weather)
      return data
    })
    .catch(console.log("ERROR"))

  },[])
  return (
    <div>
      
      <Header report={weather}/>
      <Section1/>
     
    </div>
  )
}

export default App;
