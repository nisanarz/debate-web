class HomeController {
  constructor($scope, $firebaseObject,$uibModal) {
    this.name = 'home';
    this.user={
      firstName: "",
      lastName: ""
    }
    this.counter=1;
    this.names = ["nisan","dima","adi" ];
    this.namesWithRates = [ 
      {name1:"nisan",  name2:"lev",  rate:90 },
      {name1:"dima",   name2:"jon",   rate:57 },
      {name1:"adi",    name2:"mike",    rate:15 } 
    ];
    this.animationsEnabled = true;
    var ref = firebase.database().ref().child("debates");
    $firebaseObject(ref).$bindTo($scope, "debates");
  }
  

  openCreateModal(){
    var modalInstance = $uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: 'createDebateModalContent.html',
      controller: 'ModalInstanceCtrl',
      size:100
   });
  };
    
}

export default HomeController;

