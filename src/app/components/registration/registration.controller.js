class RegistrationController {
  constructor($scope, $rootScope) {
    this.name = 'registration';
    
    $scope.showHints = true;
    $scope.user = {
      name: "",
      lastname: "",
      email: "",
      social: "123456789",
      phone: "N/A"
    };
    
  }

  click1(){
    $rootScope.currentUserID = 1;
    $rootScope.currentUserName = "nisanarz";
  }

    click2(){
    $rootScope.currentUserID = 2;
    $rootScope.currentUserName = "adibid";
  }

    click3(){
    $rootScope.currentUserID = 3;
    $rootScope.currentUserName = "levkor";
  }
}

export default RegistrationController;
