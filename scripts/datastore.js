(function(window){
    'use strict';
    var App = window.App || {};
    function DataStore(){
        console.log('running The DataStore function');
        this.data = {};
    }
    App.DataStore = DataStore;
    window.App = App;
})(window);