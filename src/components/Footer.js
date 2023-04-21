import { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="text-center mx-auto">
                <h2 className="text-center mx-auto">Kaeden O'Meara &copy;2023</h2>

                </Navbar.Brand>

            </Navbar>
        )
    }
}



export default Footer;