import { Component } from 'react';

class WeatherDay extends Component {
  render() {
    return (
      <>
        <p> Date: {this.props.forecast.date} Forecast: {this.props.forecast.description}</p>
      </>
    )
  }
}








export default WeatherDay;