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
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">
              Précédent
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(0)}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(4)}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(7)}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(11)}>
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(15)}>
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => this.sendCurrent(19)}>
              Suivant
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  sendCurrent(id) {
    this.props.handleCurrentSet(id);
  }
}

export default Navigation;
