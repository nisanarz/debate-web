class HomeController {
  constructor($scope, $firebaseObject) {
    this.name = 'home';
    this.user={
      firstName: "",
      lastName: ""
    }

    //var ref = firebase.database().ref().child("nisan").set("Asdasdasd");
    var ref = firebase.database().ref().child("nisan");
    this.syncObject = $firebaseObject(ref);
    this.syncObject.$bindTo($scope, "nisan");
  }

  changeDB(val){
    // mainApp.database().ref("/").child('nisan').set(val);

    //var ref = new Firebase("https://debatedb-16357.firebaseio.com/nisan");

    console.log(this.syncObject);
    
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    //syncObject.$bindTo($scope, "data");

  }

    
}

export default HomeController;
