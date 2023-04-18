import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: [],
            error: false,
            errorMessage: '',
            mapUrl: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            cityName: event.target.value
        })
        console.log('this is the input handler', this.state.cityName);
    }

    //async/await handle our promises - call back from axios
    // try/catch - handle our errors - TRY resolves our successful promise and CATCH - handle our rejected promise

    getCityData = async (event) => {
        event.preventDefault();

        try {

            let cityDataURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${this.state.cityName}&format=json`

            let cityData = await axios.get(cityDataURL)

            let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=10`

            this.setState({
                cityData: cityData.data[0],
                error: false,
                mapUrl: mapUrl
            })
            console.log(cityData.data[0]);

        } catch (error) {
            //TODO set state with the error boolean and error message
            this.setState({
                error: true,
                errorMessage: error.message
            })
        }

    }

    render() {
        return (
            <>
                <Container >
                    <Row>
                        <Col>
                            <Form onSubmit={this.getCityData}>
                                <Form.Label> Enter A City Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter A City" onInput={this.handleInput} />
                                <Button type="submit">Explore!</Button>

                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="text-center mx-auto">{
                                this.state.error
                                    ? <p>{this.state.errorMessage}</p>
                                    : <p>{this.state.cityData.display_name}</p>
                            }</div>
                            <p className="text-center mx-auto">Latitude:{this.state.cityData.lat}</p>
                            <p className="text-center mx-auto">Longitude:{this.state.cityData.lon}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                            <Image src={this.state.mapUrl} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}



export default Main;