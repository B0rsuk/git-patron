(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($timeout, webDevTec, toastr, $http) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453559035459;
    vm.showToastr = showToastr;
    vm.userss;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
      //GitHubCtrl();
      getUsers();
      //alert("jestem");

    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    function getUsers()
    {
        $http.get("https://api.github.com/users")
          .then(function(response)
          {
              vm.userss = response.data;
          });
    }
  }
})();
