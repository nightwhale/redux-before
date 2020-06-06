import React, { Component } from 'react';

import DisplayNumber from'./DisplayNumber';

export default class DisplayNumberRoot extends Component{
    render(){
      return (
        <div>
          <h1>display number root</h1>
            <DisplayNumber number={this.props.number}></DisplayNumber>
        </div>
      )
    }
  }
  