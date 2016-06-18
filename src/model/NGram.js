import _ from 'lodash'
import { split } from './Util'

/**
 * Implementation of 'n-Gram' algorithm
 */
class NGram {

    constructor() {

    }
    
    /**
     * This will accept arrays and in each array of documents 
     * it will create n-grams according to the given splitter.
     * @param  {list of documents} data
     * @param  {splitter for sentences} splitter=''
     * @param  {max # of grams} nGramCount=2
     */
    process(data, splitter = ' ', nGramCount = 2) {
        let tokenList = _.invokeMap(data, String.prototype.split, splitter);
        let phraseList = _.map(tokenList, function (tokens) {
            return _.without(
                _.flatMap(tokens, function (token, index) {
                    if(index + nGramCount <= tokens.length){
                        return _.invoke(tokens, 'slice', index, index + nGramCount).join(" ");
                    }
                }), undefined);
             });
        console.log(phraseList)
    }
}

export default NGram