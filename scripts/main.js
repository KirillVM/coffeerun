(function(window){
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    var App = window.App || {};
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;

    var myTruck = new Truck ('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);
    window.formHandler = formHandler;
    //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck)); без check box
    formHandler.addSubmitHandler(function (data) { 
        myTruck.createOrder.call(myTruck,data);
        checkList.addRow.call(checkList,data);
     });
    console.log(formHandler);
    

})(window);

var outputUpdate = function (value){
    'use strict'

    var output = document.querySelector('#strengthValue');
    output.value = value;

    //var input =  document.querySelector('#strengthLevel');
    //input.webkitSliderThumb.WebkitAppearance = 'none';
    //input.backgroundColor = 'red';  
}




/*var outputUpdate = function (value){
    var output = document.querySelector('#strengthValue');

    var body = document.querySelector('#bodyPosition');
    var bodyStyles = getComputedStyle(body);

    var panelBody = document.querySelector('#panelBodyPosition');
    var panelBodyStyles = getComputedStyle(panelBody);

    var inputRange = document.querySelector('#strengthLevel');
    var inputRangeStyles = getComputedStyle(inputRange);
    
    var rangeStartPosition = (parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.paddingLeft))
                            + (parseFloat(panelBodyStyles.marginLeft) + parseFloat(panelBodyStyles.paddingLeft))+3.0;
    var outputStep = parseFloat(value)*parseFloat(inputRangeStyles.width)/100.0;
    output.value = value;
    output.style.position = 'absolute';
    output.style.marginTop = '7px';
    output.style.left = rangeStartPosition + outputStep + 'px';
}

window.addEventListener("range", function() {
    console.log(document.getElementById('#strengthLevel').getBoundingClientRect());
  })*/
