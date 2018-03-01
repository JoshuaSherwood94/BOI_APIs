(function() {

    var BBVAController =  function() {

    	var vm = this;
      vm.test="This is a test";



    };

    angular.module('bankingApp').controller('bbvaController', [BBVAController]);
}());
