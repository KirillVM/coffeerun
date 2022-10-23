(function(window){
    'use strict';
    var App = window.App || {};
    var $=window.jQuery;

    function FormHandler(selector){
        
        if(!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if(this.$formElement.length===0) {
            throw new Error('Could not find elemets with selector:'+ selector);
        }
    }

    FormHandler.prototype.addSubmitHandler=function (fn) {
        console.log('Setting submit handler for form');

        this.$formElement.on('submit',function (event) {
            event.preventDefault();
            
            var agreeButton = document.querySelector('#agreeButton');
            var refuseButton = document.querySelector('#refuseButton');
            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });

            //Прогнать с помощью foreach все куки и проверить есть ли значения achivement или noAchivment
            //если есть куки не менять и добавить html для отображения доп функцианала (други виды порций кофе)
            agreeButton.onclick = function () {
                $('#modal-example').modal('hide');
                document.cookie = data['emailAddress'] + '=achivement ; expires=7';
                console.log(document.cookie);
            }

            refuseButton.onclick = function () {
                $('#modal-example').modal('hide');
                document.cookie = data['emailAddress'] + '=noAchivement ; expires=7';
                console.log('omg no');
            }
            
            //this.elements[0].focus();

            if (data['size']==='coffee-zilla' &&
                data['flavor']!='None' &&
                data['strength']===document.querySelector('#strengthLevel').max) {

                $('#modal-example').modal('show');
                //$('#modalButton').attr('data-target', '#modal-example'); (добавление атрибутов к кнопке)
                //$('#modalButton').attr('data-toggle', 'modal');  (добавление атрибутов к кнопке)
            }
            else {
                this.reset();
                this.elements[0].focus();
            }

            console.log(data);
            fn(data);
        });
    };

    /*FormHandler.prototype.addStrengthLevelHandler = function () {
        console.log('Setting coffee strength level handler for');

        this.$outputElement.on('range', function(event){
            event.preventDefault();
            

        });
    };*/

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

$(document).ready(function() {
    // при нажатии на кнопку #show-modal
    $('#show-modal').click(function() {
        // открыть модальное окно #modal-example
        $("#modal-example").modal('show');
    });
});