import { Component } from 'react';
import WeatherDay from './WeatherDay';

class Weather extends Component {
  render() {
    return (
        
        <>
            {
                this.props.weatherData.map((forecast, idx) => (
                    <WeatherDay key={idx} forecast={forecast} />
                ))
            }
            
        </>
          
    )
}
}


export default Weather;
