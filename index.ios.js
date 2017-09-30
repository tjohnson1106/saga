'use strict'

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
  
import Login from './app/login/Login.js';


export default class saga extends Component {
  render() {
    return(
      <Login />
    );
  }
}


AppRegistry.registerComponent('saga', () => saga);
