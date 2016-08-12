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
    var ref3 = firebase.database().ref().child("debates/1/comments");
    
    

    this.commentCounter = 0;
    this.msgCounter = 0;
    this.currState = 1;
    this.cards  = $firebaseArray(ref2);
    this.comments = $firebaseArray(ref3);;
    this.recommendations = [
      {link:"http://www.haaretz.com/israel-news/1.736237",img:"https://lh3.googleusercontent.com/fdEH9UJvfQqH43NBXfH_WsVEGJxszcoGGMpO9gy8rpt1E7FVJjDNnWa-cwUUhe2B0fwj93-Iu0B1rVKGVNC57xkw-_5bFvtdHYEDAkRpLUdr6escoOVXbxYH7ugzldEiTRT49bGTQYBvMAVkDHVlFSz4k8KVu9jZp4hxvkne0ZiPiN-OvnnsRW5dHGqDi96ShRmDN_M5cAtDUx5OLA7ZFAKHjeqbBsFHNSWH1eV-qM2Ivl5FZx7Pe1BpLiy3w9KpU6nYyXF8PmhFfDWjVaq8tbUvkHlY1InYTl9dLuz6IL76krkGEdFEHhZtMl0KQYolyyTaEpWGuOQokSWQ_gjsE1pAlAA1satkCUNFq3f4bnNT3eZvxqITstxsQj0gileeAPIzO2pqQ-pxzJ-GcXIqrZF6BGMWFX0PAiJ1RCec2WdJJ7m6aRqBa-N4JBAYO87sr0cCzLQJkRGkbt8b0teBAcp9jae_kg70UygbMQszQwkKVp5t7AS1y2l-VbtOwaYxQnkANqvZxrtJSCE3bAoewZ--3MJ2C4Wtitd0lbe8h59DgE7X95CuzsB8DOIiOicSU_VScq5SXfGDhnyWHRO8GMYUjTP26Q=w246-h376-no"},
      {link:"http://edition.cnn.com/2016/03/01/world/israel-deadly-navigation-mistake/index.html",
      img:"https://lh3.googleusercontent.com/vKS0At8qJa_UTc-xn4WujcAPcAYkCF77wUqxbbkiVfU862ArFCTmrlnRXJtEt_tDVkqYX60nQsFchqGcQhkh9Y41zQoIbkDUk6MA0SCXu6TaQOs8sXGdIoXUnTluSTJs20unEpTWWbuT6dHlSkmYbQlMwJOzFTgrns2uDXjXqCH_6EBZt6XtwFHf8MXHx79Qn5pASyiExtiNILta7nuu7wso6QCiEgwT_X0vWiyqxHRW7zCU8JldnWpJ1jCIPbY3sxQ09F_W9oSErdRMBpgFEQkAjg3kiYuTusByFQvsPl58w_KPuDpYXWFcRFJdJXq2ZI6ISbpXgunBLCeWit9GVkzxrrexsqKq_n9fEV2kVQujSff1Et45IDTFKNZNyNB9DGMrhnhOkEO5s0zaNrwhs98xOqRDKFCtUjoL_gm-SBuM_nmj1DHouDzuw01Qf6pzjI8fQhCZS5v4d7no9SPKH9aU9ROHdw81k7Lx9NxGa59E-JmMFjmtPL2Af9LSI9HLX-xQMDN8oIPvc0W0_krn8CH1yN-9BDyYlRvc1-HC9G8dB5iCEcFDDch3KKPAieIHoHq-t6dzkLGqfwfszMNZO9OuN6rz8A=w247-h377-no"},
      {link:"http://time.com/4421400/transgender-u-s-military-israeli-army-idf/",
      img:"https://lh3.googleusercontent.com/tgZvmfP1G3gqxqzFQSQDNRQyslkzDlu8IaNgoZN4n_sfPR0REdkTq7UPvvy8Pkj3JeRt1GveEDZZZcOmMAJkjv3DjvPAlrLhfeQ9dQw6UlJlWgM09J4f4gF86UQX6X8iUvdeLzfetB3wy9BzJ3iIlCNA5Lt8cfxFq0jVy8DOU5Bob8wmVZxHPHFwMbRHh7M8GB96QGbvxTnTDOevD1yk79G2SrbrAAkOi73vde7Yho90d8QpR4zwW8Ixcj5BloHC09NkJaBtCSbflE6khTnv0hZ1W2q3ig4MUonVMYjt_ByUFRmAvy3sG6d2ooC6r5ezSTyOOqsobXT5SqyPvOF9uLx4nPFa3Hh4npOXX670xOcMvMtzvyUDLamhMC_qJr4PVDpJE9pkO9R0RKkEMQUyRl0mbwanq2HGsdx7NL0DUYPnoKkjHPvzN80wS8nVsMiBz-zD6icyKVkmCEhdNbYixEJgawCCNv-DX9WNBuNrrAf9l23s1M7kYw6klvo54OIVjGmVFLx6-2iJpTeEAXflDt2JGOggc6YNEo1DeOstlk4SQ7CuG8G_UEMFYlYIM4XWxmlpYpt9UE7Jmjs-WyEQU8auuh0wPA=w247-h378-no"},
      {link:"http://www.jpost.com/Israel-News/IDF-soldiers-wounded-by-stray-bullets-in-separate-incidents-462698",
      img:"https://lh3.googleusercontent.com/oFKxBPZRrerl1-DpTlZcY0xhrwPDkx8jXF6p818PNCqtQJ1yfciHOz_wmg8Gz7DqoGnbJZjV-DR3nB2lhkcFk9JNGDTY2hL7zPlqi1whAKHbyxKaL6xhwS9Y9sYbuFwslwvQDPPQQeBDzhs8xfoTvj-aRWZLdcXXkSMVFGWnqUXtwm9MBJR9o_xXAXJTl-uMzsq6KGRzuIondJ9sEVIzo1P2MyNLBDhudR3mk3l3tL5x3gbTAC5drUrPmv2NNSwHgJTU-n7xU-r4hMqraqv_gYgwZg0o2NexUHfuBGVHI4i4YXTMdOPaVYKEkRl2yzfJ97U-JsCJCnKeU6nw3XqRCfe2liiacKO5MTGSaHdrTXt9SiSK0I-PkAG2Q88ml9F0D_PSBbekoslq3x05SAB4WsCMqCIVUi-_g-tvMocImERJjF5OhFYWl1XW3-5kY__5d28MCkKJpKixwsN15BW3iWCPn-LY1g6uAFENmkTSzjUBbJqpaxtpQAlcMt3bvi4iF2aapNE_vSbuqHUN-7xMm-bwamIABw5lHoaTmZFUus6ZrH3TI4roCUsDeea6wTI_s9hXUHZ_A4yLi4XbqFJQSarnztuN8g=w247-h378-no"}
    ]
    this.checkDisable = false;
    this.currMsg= "";
    this.currComment= "";
    
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
    this.comments.$add(data);
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