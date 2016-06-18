import ExcelSerializer from './ExcelSerializer';

class WebService {

    constructor(key) {
        this.key = key;
        this.url = "https://spreadsheets.google.com/feeds/list/"+this.key+"/od6/public/values?alt=json";
        this._executeCall();
    }
    
    /**
     * This function will excute the API call and provide the 
     * published excel data
     */
    _executeCall() {
        $.getJSON(this.url, function(data, status) {
            let serialize = new ExcelSerializer(data);
            //TBD : Need to assign handle it using state 
            console.log(serialize.getResponce());
        });
    }
}

export default WebService