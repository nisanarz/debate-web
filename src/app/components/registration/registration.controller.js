class RegistrationController {
  constructor($scope, $rootScope) {
    this.name = 'registration';
    this.state = 0;

    this.click1 = function (){
    console.log($rootScope.currentUserID);
    console.log($rootScope.currentUserName);
    $rootScope.currentUserID = 0;
    $rootScope.currentUserName = "nisanarz";
    console.log($rootScope.currentUserID);
    console.log($rootScope.currentUserName);
  }

    this.click2 = function (){
    $rootScope.currentUserID = 1;
    $rootScope.currentUserName = "adibid";
  }

    this.click3 = function(){
    $rootScope.currentUserID = 3;
    $rootScope.currentUserName = "levkor";
  }

    $scope.showHints = true;
    $scope.user = {
      name: "",
      lastname: "",
      email: "",
      social: "123456789",
      phone: "N/A"
    };
    
  }

  // click1(){
  //   console.log($rootScope.currentUserID);
  //   console.log($rootScope.currentUserName);
  //   $rootScope.currentUserID = 1;
  //   $rootScope.currentUserName = "nisanarz";
  //   console.log($rootScope.currentUserID);
  //   console.log($rootScope.currentUserName);
  // }

  //   click2(){
  //   $rootScope.currentUserID = 2;
  //   $rootScope.currentUserName = "adibid";
  // }

  //   click3(){
//     $rootScope.currentUserID = 3;
//     $rootScope.currentUserName = "levkor";
//   }
 }

export default RegistrationController;
