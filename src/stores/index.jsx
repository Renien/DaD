import React, {Component} from 'react';
import {observable} from 'mobx';


class AppState {
    
    @observable textValue;
    
    constructor() {
        this.textValue = "Hello World";
    }
    
    //Bind the text data
    setTextValue(data) {
        this.textValue = data;
    }    
}

export default  new AppState();