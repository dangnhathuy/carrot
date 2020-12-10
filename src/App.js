import React, {useState} from 'react';
import HomeForm from './components/Form';
import WeatherPage from './components/WeatherPage';
import './App.css';


function App() {

  const [ input, setInput ] = useState('');
  const [ route, setRoute ] = useState('home');
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ weather, setWeather ] = useState();

  
  const onCitySelect = (event) => {
    let city = '';
    if (event.key === 'enter') {
      city = input.replace(/\s/g, '%20')
    } else {
      city = event.target.value;
    } 
    onCitySubmit(city);
  }


  const onCitySubmit = (city) => {

      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2Cca&cnt=10&units=metric%20or%20imperial`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(response =>  onRouteChange(response))
  }

  const onRouteChange = (response) => {
    if(response.name) {
      let mainWeather = [];
      response.weather.map( w => {
        mainWeather.push(w.main)
      })
      setWeather({
        city: response.name,
        temperature: response.main.temp,
        max: response.main.temp_max,
        min: response.main.temp_min,
        weather: mainWeather
    });
      setRoute('weather');
    } else if(response.cod) {
      setRoute('error');
      setErrorMessage(response.message)
      
    } else if(!response.cod) {
      setRoute('home')
    }
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }


  return (
      route === 'home' || route === 'error'
    ? <div
      onKeyPress={event => {
      if (event.key === 'Enter') {
          onCitySelect(event);
          }
        }
      }>
        <HomeForm 
          className='home'
          onCitySelect={onCitySelect} 
          onInputChange={onInputChange} 
          onRouteChange={onRouteChange} 
          route={route} 
          errorMessage={errorMessage}
        />
      </div>
      :  
      <>
        <WeatherPage weather={weather} onRouteChange={onRouteChange}/>
      </>
  );
}

export default App;
