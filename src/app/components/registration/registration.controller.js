class RegistrationController {
  constructor($scope) {
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
  
}

export default RegistrationController;
