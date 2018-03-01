(function() {

    var BBVAController =  function($http) {

    	var vm = this;
      vm.test="This is a test";
      console.log(vm.test);
      
      $http.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) {
      vm.resultData = response.data;
      console.log(vm.resultData);
    });


    };

    angular.module('bankingApp').controller('bbvaController', ['$http',BBVAController]);
}());
