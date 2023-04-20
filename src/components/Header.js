import { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="text-center mx-auto">
                <h1>City Explorer</h1>

                </Navbar.Brand>

            </Navbar>
        )
    }
}



export default Header;