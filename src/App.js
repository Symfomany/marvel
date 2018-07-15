import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTimeout from "react-timeout";
import HeroList from "./HeroList";
import Loader from "./Loader";
import HeroCard from "./HeroCard";
import Navigation from "./Navigation";
import Header from "./Header";
import { Container, Row, Col, Media, ListGroup } from "reactstrap";
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
      page: 0,
      loaded: false
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
          offset: 100
        }
      })
      .then(res => {
        this.setState({
          heroes: res.data.data.results,
          hero: res.data.data.results[0],
          loaded: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { heroes } = this.state;
    return (
      <div style={{ backgroundColor: "black" }}>
        {heroes.length === 0 ? (
          <Loader />
        ) : (
          <Container style={{ background: "#fff" }}>
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
              <Col xs="12" md="6" >
                <Navigation
                  handleCurrentSet={this.handleCurrentSet}
                  set={this.state.page}
                  idHero={this.state.hero.id}
                />
                <ListGroup flush>
                  {heroes.length > 0 && this.getHeroes(this.state.page)}
                </ListGroup>
              </Col>
              <Col xs="12" md="6">
                {this.state.hero.name && <HeroCard hero={this.state.hero} />}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }

  //========================================= FONCTIONS =================================

  /**
   * @param {id est un chiffre, cette fonction stocke le n° de page courant}
   */
  handleCurrentSet(id) {
    this.setState({ page: id });
  }
  /**
   *
   * @param {elt est un chiffre, cette fonction stocke le personnage courant }
   */
  displayHero(elt) {
    this.setState({
      hero: elt
    });
  }
  /**
   * Retourne la liste hydratée avec les données du set de 4 personnages
   */
  getHeroes() {
    const currentId = this.state.hero.id;
    const extract = this.state.heroes;
    return (
      <HeroList
        displayHero={this.displayHero}
        currentId={currentId}
        extract={extract}
        set={this.state.page}
      />
    );
  }
}

export default ReactTimeout(App);
