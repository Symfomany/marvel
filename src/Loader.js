import React, { Component } from "react";
import batman from "./assets/marvel.webp";
import { Container, Row, Col } from "reactstrap";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid={true} style={{ background: "#000" }}>
        <Row
          noGutters
          className="justify-content-xs-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col xs={12} className="text-center">
            <img src={batman} alt="Batman au petit matin" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Loader;
