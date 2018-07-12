import React, { Component } from "react";
import { Jumbotron, Row, Col, Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import cover from "./The_Marvel_Universe.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Jumbotron>
            <ReactCSSTransitionGroup
              transitionName="anim"
              transitionAppear={true}
              transitionAppearTimeout={3000}
              transitionEnter={false}
              transitionLeave={false}
            >
              <img className="img-fluid" src={cover} />
              <h1>
                <span className="display-1">We can be heroes</span>
                <br />
                <span className="display-6">Not just for one day</span>
              </h1>
            </ReactCSSTransitionGroup>
            <p className="lead">
              Vous trouvez votre job actuel aussi attrayant qu'un jour de
              novembre à Paris ? C'est dommage, vous avez sûrement un talent, un
              truc à vous, un truc tabou, un joujou extra qui fait de vous
              quelqu'un d'exceptionnel. Rejoignez-nous et devenez super héros !
            </p>
            <hr className="my-2" />
            <p>
              Travaillez dans un cadre unique, au sein des locaux de Merveil,
              vous aurez droit aux tickets restaurants et accès à la machine à
              crêpe fournis.
            </p>
            <p className="lead">
              <Button color="primary">Rejoindre notre équipe</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Header;
