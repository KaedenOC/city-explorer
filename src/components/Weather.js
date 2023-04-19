import { Component } from 'react';

class Weather extends Component {
  render() {
    return (
        <>
            <p>{this.props.dateData} {this.props.weatherData}.</p>
        </>
          
    )
}
}


export default Weather;
