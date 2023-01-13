import React, {Component} from "react";
import classNames from "classnames";
import './Drawer.css';
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {
  handleClick = () => {
    this.props.onClose()
  }

  renderLinks(links) {
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
    };

    const links = [
      {to: '/', label: 'List of quizes', exact: true},
    ];

    if(this.props.isAuthenticated) {
      links.push({to: '/quiz-creator', label: 'Create quiz', exact: false});
      links.push({to: '/logout', label: 'Logout', exact: false});
    } else {
      links.push({to: '/auth', label: 'Authorization', exact: false});
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    );
  };
};

export default Drawer;