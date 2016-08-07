class HomeController {
  constructor($scope) {
    this.name = 'home';
    this.user={
      firstName: "",
      lastName: ""
    }

  }

  changeDB(val){
    mainApp.database().ref("/").child('nisan').set(val);
  }

    
}

export default HomeController;
