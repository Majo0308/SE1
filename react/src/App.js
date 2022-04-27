import React from 'react';
import Canvas from './Canvas/Canvas';
import './Canvas/design.css'
import { Row, Col, Container } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <main>
        <ul>
            <li><a href="default.asp">FlowMap</a></li>
            <li><a href="http://localhost:3001/home.html">Home</a></li>
            <li><a href="contact.asp">Options</a></li>
            <li><a class="active" href="about.asp">Save</a></li>

        </ul>
        <Container>
          <Row>
            <Col> <Canvas/> </Col>
          </Row>
        </Container>
      </main>

    </div>
  );
}

export default App;
