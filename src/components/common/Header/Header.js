import React from 'react';
import './header.css';
import { Menu, Button, Icon, Grid, Segment } from 'semantic-ui-react'

function Header({ user = {}, classes }) {
  return (    
    <Grid container columns={2} className="m-0">
      <Grid.Row fluid>
      <Grid.Column width={13}>
        <Grid columns= {5}>
        <Grid.Column>
          <Button color='facebook' color="brown" className="header-stats">
            <div>
              <Icon name='clock' /> Draft
              <span className="badge-number">10</span>
              </div>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color='facebook' color="blue" className="header-stats">
            <div>
              <Icon name='clock' /> Re-work
              <span className="badge-number">09</span>
              </div>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color='facebook' color="orange" className="header-stats">
            <div>
              <Icon name='exclamation circle' /> Pending
              <span className="badge-number">10</span>
              </div>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color='facebook' color="red" className="header-stats">
            <div>
              <Icon name='times circle' /> Rejected
              <span className="badge-number">10</span>
            </div>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color='facebook' color="green" className="header-stats">
            <div>
              <Icon name='check circle' /> Published
              <span className="badge-number">10</span>
              </div>
          </Button>
        </Grid.Column>
        </Grid>
          
      </Grid.Column>
      <Grid.Column width={3}>
        <div className="header-right">
          <Icon name='search' size='big' ></Icon> 
          <Icon name='bell' size='big' ></Icon> 
        </div>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  );
}

export default Header;
