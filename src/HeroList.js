import React, { Component } from "react";
import { ListGroupItem, Media, Badge } from "reactstrap";

class HeroList extends Component {
  render() {
    const extract = this.props.extract;
    const set = this.props.set;
    return extract.slice(set, set + 4).map((elt, i) => {
      return (
        <ListGroupItem
          key={i}
          className={this.props.currentId === elt.id ? "active" : null}
        >
          <Media>
            <Media left top className="d-none d-lg-block">
              <Media
                object
                src={`${elt.thumbnail.path}/landscape_large.jpg`}
                alt={elt.name}
                style={{ marginRight: "1rem" }}
              />
            </Media>
            <Media body>
              <Media
                onClick={() => this.props.displayHero(elt)}
                heading
                style={{ cursor: "pointer" }}
              >
                {elt.name}
              </Media>
              <p className="d-none d-md-block">
                Séries : <Badge color="dark">{elt.series.available}</Badge>{" "}
                Albums : <Badge color="dark">{elt.stories.available}</Badge>
              </p>
            </Media>
          </Media>
        </ListGroupItem>
      );
    });
  }
}

export default HeroList;
