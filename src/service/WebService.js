import ExcelSerializer from './ExcelSerializer';

class WebService {

    /**
     * Constructor will initialize the API-KEY and 
     * execute the appropritae service call
     * @param  {api-key} key
     */
    constructor(key, callBack) {
        this.key = key;
        this.url = "https://spreadsheets.google.com/feeds/list/"+this.key+"/od6/public/values?alt=json";
        this._executeCall(callBack);
    }
    
    /**
     * This function will excute the API call and provide the 
     * published excel data
     */
    _executeCall(callBack) {
        $.getJSON(this.url, function(data, status) {
            let serialize = new ExcelSerializer(data);
            callBack(serialize.getResponce());
        });
    }
}

export default WebService