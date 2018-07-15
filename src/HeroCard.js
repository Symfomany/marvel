import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const hero = this.props.hero;
    return (
      <Card>
        <CardHeader>
          <small>Matricule : {hero.id}</small>
        </CardHeader>
        <CardImg
          top
          width="100%"
          src={`${hero.thumbnail.path}/landscape_incredible.jpg`}
          alt="Photo"
        />
        <CardBody>
          <CardTitle>{hero.name}</CardTitle>
          <CardText>{hero.description}</CardText>
          <CardText className="card-subtitle mt-2 text-muted">
            Premières apparitions :
          </CardText>
        </CardBody>
        <ul className="list-group list-group-flush">
          {hero.stories.items.slice(0, 3).map((elt, i) => {
            return (
              <li key={i} className="list-group-item">
                {elt.name}
              </li>
            );
          })}
        </ul>
        <CardFooter>
          <h6 className="text-muted d-flex justify-content-between align-items-center">
            Présence dans les comics{" "}
            <span className="badge badge-primary badge-pill">
              {hero.series.available}
            </span>
          </h6>
        </CardFooter>
      </Card>
    );
  }
}

export default HeroCard;
