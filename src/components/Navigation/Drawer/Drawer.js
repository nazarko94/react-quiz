import React, {Component} from "react";
import classNames from "classnames";
import './Drawer.css';
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Signup', exact: false},
  {to: '/quiz-creator', label: 'Create test', exact: false},
];

class Drawer extends Component {
  handleClick = () => {
    this.props.onClose()
  }

  renderLinks() {
    let activeClass = classNames('active');

    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            className={({isActive}) => 
              isActive ? activeClass : null
            }
            onClick={this.handleClick}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classNames('drawer')];

    if(!this.props.isOpen) {
      cls.push(classNames('close'));
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