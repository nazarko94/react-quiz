import React, {Component} from 'react';
import MenuToggle from '../../components/Navigation/MenuToogle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import classNames from 'classnames';
import  './Layout.css';

class Layout extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    })
  }

  render() {
    return (
      <div className={classNames('layout')}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout