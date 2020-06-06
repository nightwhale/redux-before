import React, { Component } from 'react';

import AddNumber from'./AddNumber';

export default class AddNumberRoot extends Component{
    render(){
      return (
        <div>
          <h1>add number root</h1>
            <AddNumber onClick={function(size){
                //alert('size : '+size);
                this.props.onClick(size);
            }.bind(this)}></AddNumber>
        </div>
      )
    }
  }