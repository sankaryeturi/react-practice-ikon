import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './title.css'

const TitleBar = () => (
  <h2 className="title-bar">
    Dashboard
    <Button  circular basic color='green' style={{float: "right"}}>Create Article</Button>
  </h2>
)

TitleBar.propTypes = {
}

export default TitleBar;