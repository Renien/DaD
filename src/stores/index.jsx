import React, {Component} from 'react';
import {observable} from 'mobx';


class AppState {
    
    @observable textValue
    @observable algoType
    @observable codeSample
    
    constructor() {
        this.textValue = "Hello World";
        this.algoType = "default";
    }
    
    //Bind the text data
    setTextValue(data) {
        this.textValue = data;
    }    
}

export default  new AppState();