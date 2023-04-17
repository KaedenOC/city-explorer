import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends Component {
    
    // API key https://us1.locationiq.com/v1/search?key=${REACT_APP_LOCATION_IQ_API_KEY}&q=SEARCH_STRING&format=json


    render() {
        return(
            <>
            <Form.Group>
                <Form.Label> Enter A City Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter A City" />
                <Button>Explore!</Button>
            </Form.Group>
            </>
        )
    }
}



export default Main;