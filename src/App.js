import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import HeroCard from "./HeroCard";
import Navigation from "./Navigation";
import Header from "./Header";
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  Media,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "./App.css";
import axios from "axios";

Container.propTypes = {
  fluid: PropTypes.bool
};
Media.propTypes = {
  left: PropTypes.bool,
  top: PropTypes.bool
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      hero: {},
      set: 0
    };
    this.getHeroes = this.getHeroes.bind(this);
    this.displayHero = this.displayHero.bind(this);
    this.handleCurrentSet = this.handleCurrentSet.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://gateway.marvel.com:443/v1/public/characters", {
        params: {
          apikey: "bf26bedb431f3874f0ffcd07be488035",
          limit: 20,
          offset: 99
        }
      })
      .then(res => {
        this.setState({ heroes: res.data.data.results });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { heroes } = this.state;
    console.log(this.state.set);
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs="12" className="text-center">
            <h2
              className="display-6 mt-6"
              style={{ textTransform: "uppercase" }}
            >
              Notre équipe
            </h2>
            <h3
              className="display-4 mb-5"
              style={{ textTransform: "uppercase" }}
            >
              Une nouvelle vision de l'héroïsme
            </h3>
          </Col>
          <Col xs="6">
            <Navigation handleCurrentSet={this.handleCurrentSet} />
            <ListGroup flush>
              {heroes.length > 0 && this.getHeroes(this.state.set)}
            </ListGroup>
          </Col>
          <Col xs="6">
            {this.state.hero.name && <HeroCard hero={this.state.hero} />}
          </Col>
        </Row>
      </Container>
    );
  }
  /**
   * Enregistre le début du set de personnages courant
   */
  handleCurrentSet(id) {
    this.setState({ set: id });
  }
  /**
   *
   * @param {Affiche la carte correspondant à l'élément sélectionné} elt
   */
  displayHero(elt) {
    const newHero = elt;
    this.setState({
      hero: newHero
    });
  }
  /**
   *
   * @param {Cette fonction affiche un set de 4 personnages extraits en fonction du paramètre passé} set
   */
  getHeroes(set) {
    const extract = this.state.heroes;
    return extract.slice(set, set + 4).map((elt, i) => {
      return (
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={3000}
          transitionEnter={true}
          transitionLeave={false}
          key={i}
        >
          <ListGroupItem key={i}>
            <Media>
              <Media left top href="#">
                <Media
                  object
                  src={`${elt.thumbnail.path}/landscape_large.jpg`}
                  alt={elt.name}
                  style={{ marginRight: "1rem" }}
                />
              </Media>
              <Media body>
                <Media onClick={() => this.displayHero(elt)} heading>
                  {elt.name}
                </Media>
                <p>
                  Séries :{" "}
                  <Badge color="secondary">{elt.series.available}</Badge> Albums
                  : <Badge color="secondary">{elt.stories.available}</Badge>
                </p>
              </Media>
            </Media>
          </ListGroupItem>
        </ReactCSSTransitionGroup>
      );
    });
  }
}

export default App;
