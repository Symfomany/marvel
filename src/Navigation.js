import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendCurrent = this.sendCurrent.bind(this);
  }
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {this.createList()}
        </ul>
      </nav>
    );
  }

  //========================================= FONCTIONS =================================

  /**
   * Envoie au parent l'id du set sélectionné par l'utilisateur
   */
  sendCurrent(id) {
    this.props.handleCurrentSet(id);
  }

  /**
   * Crée les puces de navigation + classe ACTIVE sur la puce du personnage courant
   */
  createList() {
    const sets = [0, 4, 8, 12, 16];
    let pageNumber = 0;
    return sets.map(elt => {
      pageNumber += 1;
      return (
        <li
          key={pageNumber}
          className={`page-item ${this.props.set === elt ? "active" : null}`}
        >
          <a className="page-link" onClick={() => this.sendCurrent(elt)}>
            {pageNumber}
          </a>
        </li>
      );
    });
  }
}

export default Navigation;
