import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Icon,
  Menu,
  Sidebar
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Articles from '../../../pages/articles/Articles';
import './sidenav.css'

const styles = theme => ({
  
});
const SideNav = ({ visible, menuItems }) => (
  <Sidebar
    as={Menu}
    animation='slide along'
    direction='left'
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
    style={{backgroundColor: "#093B54"}}
  >
    <div>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ikon_logo.svg/2000px-Ikon_logo.svg.png" />
      </div>
    </div>
    <div className="profile">
      <img src="http://profilepicturesdp.com/wp-content/uploads/2018/06/best-profile-pictures-men-2.jpg" className="profile-image" />
      <div className="profile-name">Rajgopal</div>
    </div>
    <Menu.Item as={Link} to='dashboard'>
      <Icon name='qrcode' />
      Dashboard
    </Menu.Item>
    <Menu.Item as='a' className="nav-item">
      <Icon name='newspaper' />
      Search Articles
    </Menu.Item>
    
    <Menu.Item as={Link} to='article-create'>
      <Icon name='folder outline' />
      Create Articles
    </Menu.Item>

    <Menu.Item as={Link} to="/" className="nav-item">
      <Icon name='camera' />
      Logout
    </Menu.Item>
  </Sidebar>
)

SideNav.propTypes = {
  menuItems: PropTypes.object,
  visible: PropTypes.bool,
}

export default SideNav;