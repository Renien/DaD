import _ from 'lodash';

class ExcelSerializer {
    
    /**
     * The constructor accepts the RAD data and
     * initiates the serilaizling process
     * @param  {Raw JSON data } data
     */
    constructor(data) {
        this.responce = {};
        this._process(data.feed.entry);
    }
    
    /**
     * This function will itereate into feed entries 
     * and serialize the columns and values
     * @param  {Raw JSON data} data
     */
    _process(data) {
        let _super = this;
        _.map(data, function (obj) {
            _super.responce[obj['gsx$key']['$t']] = obj['gsx$value']['$t'];
        });
    }

    /**
     * This will return the serialized 
     * data from public excelsheet 
     */
    getResponce() {
        return this.responce;
    }
}

export default ExcelSerializer