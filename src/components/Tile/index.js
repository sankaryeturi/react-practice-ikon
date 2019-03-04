import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

const mapStateToProps = state => ({
  user: state.user,
});

function TileContainer({ user = {} }) {
  return <Tile />;
}

export default connect(
  mapStateToProps,
  null
)(TileContainer);
