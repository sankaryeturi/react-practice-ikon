import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Dashboard from './Dashboard';
import { FETCH_ARTICLES } from './dashboard.action';
import SideNav from '../../components/common/SideNav';
import Header from '../../components/common/Header/Header';
import TitleBar from '../../components/common/TitleBar';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  push,
  dashboard: payload => {
    dispatch({
      type: FETCH_ARTICLES,
      payload,
    });
  },
});

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div style={{width: "100%"}}>
        <SideNav />
        <div style={{marginLeft: "150px"}}>
          <Header />
          <TitleBar />
          <Dashboard />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
