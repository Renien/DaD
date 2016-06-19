import React, {Component} from 'react';
import {observable} from 'mobx';


class AppState {
    
    @observable textValue
    @observable algoType
    @observable codeSample
    
    constructor() {
        this.textValue = "Hello World";
        this.algoType = "default";
        this.codeSample = "code not available";
    }
    
    setAlgoType(data){
        this.algoType = data;
    }

    setCodeSample(data) {
        this.codeSample = data;
    }    
}

export default  new AppState();