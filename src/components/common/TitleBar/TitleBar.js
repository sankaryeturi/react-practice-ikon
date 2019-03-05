import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './title.css'

const TitleBar = () => (
  <div>
    <h2 className="title-bar">
      Dashboard
      <Button  circular basic color='green' style={{float: "right"}}>Create Article</Button>
    </h2>
    {/* <h2 className="title-bar">
      Create Article
    </h2> */}
  </div>  
)

TitleBar.propTypes = {
}

export default TitleBar;