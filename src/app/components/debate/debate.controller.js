class DebateController {
  constructor($scope, $firebaseObject, $rootScope) {
    this.name = 'debate';


    this.currentUserID = $rootScope.currentUserID;
    this.currentUserName = $rootScope.currentUserName;
    //get debate object and users objects
    var ref = firebase.database().ref().child("debates/1");
    this.syncObjectDebate = $firebaseObject(ref);   
    this.syncObjectDebate.$bindTo($scope, "debateData");

    this.commentCounter = 0;
    this.msgCounter = 0;
    this.currState = 1;
    this.cards = [];
    this.comments = [];
    this.recommendations = [
      {link:"http://www.haaretz.com/israel-news/1.736237",img:"assets/articles/img1.JPG"},
      {link:"http://edition.cnn.com/2016/03/01/world/israel-deadly-navigation-mistake/index.html",img:"assets/articles/img2.JPG"},
      {link:"http://time.com/4421400/transgender-u-s-military-israeli-army-idf/",img:"assets/articles/img3.JPG"},
      {link:"http://www.jpost.com/Israel-News/IDF-soldiers-wounded-by-stray-bullets-in-separate-incidents-462698",img:"assets/articles/img4.JPG"}
    ]
    this.checkDisable = true;

    
  }

  postMsg(data){


    this.cards[this.msgCounter] = data;
    this.currState = this.currState + 1;
    this.msgCounter = this.msgCounter +1;
    this.checkDisable = !this.checkDisable;

  }

  postComment(data){
    this.comments[this.commentCounter] = data;
    this.commentCounter = this.commentCounter +1;
  }
    
}

export default DebateController;





    //this.syncObject.chatA[0] = this.inputMsg;
    // firebase.database().ref().child("debates/3").set({
    //   id: 3,
    //   chatA: ["hello", "htht", "Werwer"],
    //   chatB: ["qwe", "qweqwe", "qweqsad"],
    //   userA: 1,
    //   userB: 5,
    //   rank: 34,
    //   tags: ["qwe" , "qwe"],
    //   status: 1,
    //   comments:[{user: 1, msg: "erwer"},{user:4, msg: "dfsdf"}]
    // })