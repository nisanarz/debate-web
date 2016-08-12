class DebateController {
  constructor($scope, $firebaseObject, $firebaseArray, $rootScope) {
    this.name = 'debate';


    this.currentUserID = $rootScope.currentUserID;
    this.currentUserName = $rootScope.currentUserName;


    //get debate object and users objects
    var ref = firebase.database().ref().child("debates/1");
    this.syncObjectDebate = $firebaseObject(ref);   
    this.syncObjectDebate.$bindTo($scope, "debateData");

    var ref2 = firebase.database().ref().child("debates/1/chatA");
    
    

    this.commentCounter = 0;
    this.msgCounter = 0;
    this.currState = 1;
    this.cards  = $firebaseArray(ref2);;
    this.comments = [];
    this.recommendations = [
      {link:"http://www.haaretz.com/israel-news/1.736237",img:"assets/articles/img1.JPG"},
      {link:"http://edition.cnn.com/2016/03/01/world/israel-deadly-navigation-mistake/index.html",img:"assets/articles/img2.JPG"},
      {link:"http://time.com/4421400/transgender-u-s-military-israeli-army-idf/",img:"assets/articles/img3.JPG"},
      {link:"http://www.jpost.com/Israel-News/IDF-soldiers-wounded-by-stray-bullets-in-separate-incidents-462698",img:"assets/articles/img4.JPG"}
    ]
    this.checkDisable = false;
    this.currMsg= "";
    
  }

  postMsg(data){

      this.cards.$add(data);
    // this.cards[this.msgCounter] = data;
    this.currState = this.currState + 1;
    //firebase.database().ref().child("debates/1").child("currState").set(this.currState);
   // this.currState = this.currState + 1;
    this.msgCounter = this.msgCounter +1;
    this.checkDisable = !this.checkDisable;

  }

  postComment(data){
    debugger;
    this.comments[this.commentCounter] = data;
    this.commentCounter = this.commentCounter +1;
    var element = angular.element( document.querySelector( '#commentsCards' ) );
    this.hhh = element[0].scrollHeight;
    element[0].scrollTop = this.hhh+150;
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