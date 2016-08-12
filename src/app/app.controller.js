class AppController {
  constructor($rootScope) {
    this.name = 'app';
    $rootScope.currentUserID = null;
    $rootScope.currentUserName = null;
    $rootScope.isPending=false;
    $rootScope.isLive=false;
    $rootScope.currState=1;

    const config = {
        apiKey: "AIzaSyB_QbI3_9CWew8XMeHfu6CKXYG147w0L0s",
        authDomain: "debatedb-16357.firebaseapp.com",
        databaseURL: "https://debatedb-16357.firebaseio.com/",
    };
    firebase.initializeApp(config);

  }
}

export default AppController;