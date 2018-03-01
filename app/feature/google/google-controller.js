(function() {

    var GoogleController =  function() {

    	var vm = this;
      vm.test="This is a test";



    };

    angular.module('bankingApp').controller('googleController', [GoogleController]);
}());
