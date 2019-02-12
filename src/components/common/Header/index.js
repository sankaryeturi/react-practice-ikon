import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  user: state.user,
});

function HeaderContainer({ user = {} }) {
  return <Header user={user} />;
}

export default connect(
  mapStateToProps,
  null
)(HeaderContainer);
