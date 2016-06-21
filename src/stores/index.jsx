import React, {Component} from 'react';
import {observable} from 'mobx';


class AppState {
    
    @observable isCodeLoad
    @observable algoType
    @observable codeSample
    @observable theory
    @observable sampleImplementations
    @observable references

    constructor() {
        this.algoType = "default";
        this.codeSample = "code not available";
        this.isCodeLoad = true;
        this.references = [];
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

    setTheory(data) {
        this.theory = data;
    }  

    setSampleImplementation(data) {
        this.sampleImplementations = data;
    }

    setReferences(data) {
        this.references = JSON.parse(data)["data"];
    }
}

export default  new AppState();