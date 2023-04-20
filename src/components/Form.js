import { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class FormComp extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form onSubmit={this.props.onSubmit}>
              <Row>
              <Form.Label className="text-center mx-auto" column="lg"> Enter A City Name:</Form.Label>
              </Row>
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