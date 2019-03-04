import React from 'react';
import { connect } from 'react-redux';
import SideNav from './SideNav';

const mapStateToProps = state => ({
  user: state.user,
});

function SideNavContainer({ user = {} }) {
  return <SideNav visible={true} />;
}

export default connect(
  mapStateToProps,
  null
)(SideNavContainer);
