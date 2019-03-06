import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EventFormContainer from './components/EventFormContainer';

const App = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col>
        <h1>Event Form</h1>
        <EventFormContainer />
      </Col>
    </Row>
  </Container>
);

export default App;
