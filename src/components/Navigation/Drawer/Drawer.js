import React, {Component} from "react";
import classNames from "classnames";
import classes from './Drawer.css';
import './Drawer.css';
import Backdrop from "../../UI/Button/Backdrop/Backdrop";

const links = [1, 2, 3,];

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
        </li>
      )
    })
  }

  render() {
    const cls = [classNames('drawer')];

    if(!this.props.isOpen) {
      cls.push(classNames, 'close');
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    )
  }
}

export default Drawer;