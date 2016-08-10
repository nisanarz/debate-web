class AppController {
  constructor() {
    this.name = 'app';

    const config = {
        apiKey: "AIzaSyB_QbI3_9CWew8XMeHfu6CKXYG147w0L0s",
        authDomain: "debatedb-16357.firebaseapp.com",
        databaseURL: "https://debatedb-16357.firebaseio.com/",
    };
    firebase.initializeApp(config);

  }
}

export default AppController;