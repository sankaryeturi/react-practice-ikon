import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Tile = () => (
  <Card fluid>
    <Card.Content>
      <Card.Meta style={{marginBottom: "20px"}}>
        <span>29 Dec 2018</span> | &nbsp; 
        <span>Politics</span> | &nbsp;
        <Icon name="attach"></Icon>
        <span style={{float: "right", color: "white", padding: "2px 5px", fontWeight: "bold", backgroundColor: "brown"}}>D</span>
      </Card.Meta>
      <Card.Header>Not allowed to take lunch during ED questioning, TDP MLA tells.</Card.Header>
      
      <Card.Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{textAlign: "center"}}>
      <a style={{color: "#0182C3"}}>
        Edit / View
      </a>
    </Card.Content>
  </Card>
)

Tile.propTypes = {
}

export default Tile;