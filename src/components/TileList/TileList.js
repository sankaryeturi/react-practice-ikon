import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Tile from '../Tile/Tile';

const TileList = () => (
  <Grid style={{margin: "10px"}}>
    <Grid.Row columns={3}>
      {
        [1,2,3,4,5,6].map(e => {
          return (
            <Grid.Column style={{marginBottom: "2rem"}} key={e}>
              <Tile />
            </Grid.Column>
          )
        })
      }
    </Grid.Row>
  </Grid>
)

TileList.propTypes = {
}

export default TileList;