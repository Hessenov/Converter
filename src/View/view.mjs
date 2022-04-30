export default class View {
    constructor() {
        this.root = document.getElementById("root");
        this.label = document.getElementById("text");
        this.secondLabel = document.getElementById("text2");
        this.firstResult = document.getElementById("first_convert_result")
        this.secondResult = document.getElementById("second_convert_result")
        this.getAllFirstInputs = document.querySelectorAll('input[name="currency"]')
        this.getAllSecondInputs = document.querySelectorAll('input[name="currency2"]')
    }
    init(){
    
    };
}

