import { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class FormComp extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form onSubmit={this.props.onSubmit}>
              <Form.Label> Enter A City Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter A City" onInput={this.props.onInput} />
              <Button type="submit">Explore!</Button>

            </Form>
          </Col>
        </Row>
      </>
    )
  }
}








export default FormComp;