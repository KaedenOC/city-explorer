import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: [],
            
        }
    }

    handleInput = (event) => {
        this.setState ( {
            cityName: event.target.value
        })
        console.log('this is the input handler', this.state.cityName);
    }

    //async/await handle our promises - call back from axios

    getCityData = async (event) => {
        event.preventDefault();

        //TODO define our url to pass to axios using the city in state
        let cityDataURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.cityName}&format=json`
        //TODO use the city that is in state, and call to the Location IQ using axios
        let cityData = await axios.get(cityDataURL)
        
        //TODO take the return from axios and set that to state - hold city data
        this.setState({
            cityData: cityData.data[0]
        })
        console.log(cityData.data[0]);
    }

    render() {
        return (
            <>
                <Form onSubmit={this.getCityData}>
                    <Form.Label> Enter A City Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter A City" onInput={this.handleInput}/>
                    <Button type="submit">Explore!</Button>
                </Form>
            </>
        )
    }
}



export default Main;