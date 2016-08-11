class AppController {
  constructor($rootScope) {
    this.name = 'app';
    $rootScope.currentUserID = 3;
    $rootScope.currentUserName;
    $rootScope.isPending=false;
    $rootScope.isLive=false;

    const config = {
        apiKey: "AIzaSyB_QbI3_9CWew8XMeHfu6CKXYG147w0L0s",
        authDomain: "debatedb-16357.firebaseapp.com",
        databaseURL: "https://debatedb-16357.firebaseio.com/",
    };
    firebase.initializeApp(config);

  }
}

export default AppController;