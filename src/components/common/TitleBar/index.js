import React from 'react';
import { connect } from 'react-redux';
import TitleBar from './TitleBar';

const mapStateToProps = state => ({
  user: state.user,
});

function TitleBarContainer({ user = {} }) {
  return <TitleBar />;
}

export default connect(
  mapStateToProps,
  null
)(TitleBarContainer);
