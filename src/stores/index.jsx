import React, {Component} from 'react';
import {observable} from 'mobx';


class AppState {
    
    @observable isCodeLoad
    @observable algoType
    @observable codeSample
    
    constructor() {
        this.algoType = "default";
        this.codeSample = "code not available";
        this.isCodeLoad = true;
    }
    
    setAlgoType(data){
        this.algoType = data;
    }

    setCodeSample(data) {
        this.codeSample = data;
    }  

    updateCodeLoader(data) {
        this.isCodeLoad = data;
    }  
}

export default  new AppState();