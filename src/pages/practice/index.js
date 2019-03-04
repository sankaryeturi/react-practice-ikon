import React, { Component } from 'react';
import { connect } from 'react-redux';

class PracticeContainer extends Component {

    render() {
        return (
            <div style={{width: "100%"}}>
                This is practice
            </div>
        );
    }
}


export default connect()(PracticeContainer)