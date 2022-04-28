// Functions

messagingSetup () {
    firebase.ref(`players/player${this.opponentIndex}/name`).on ("value", (data) => {
        this.opponentInfo = data.val ();
        console.log (this.opponentInfo); 
    })

    this.messagingInfo.html (`You can now chat with ${this.opponentInfo}, your opponent`);
    this.messagingInput.show ();
    this.messageButton.show ();
    this.messageButtonClicked ();
    this.messageRecieved ();
}

messageButtonClicked () {
    this.messagesSent += 1;

    firebase.ref (`messages/player${this.index}message${this.messagesSent}`).set ({
       message : this.messagingInput.value(),
    })
}

messageRecieved () {
    var opponentMessage;

    this.opponentMS += 1;

    database.ref ("/").on ("value", function (data) {
        opponentMessage = `messages/player${this.opponentIndex}/message${this.opponentMS}`
    })

    var displayMessage = ceateElement ("h6").html(opponentMessage).position(this.mEX, this.messageButton.y + 20);
}

// functionssssssssss

messagingSetup () {
    firebase.ref(`players/player${this.opponentIndex}`).on ("value",  (data) => {
        this.opponentName = data.val ();
        console.log (this.opponentName);
        console.log (data); 
    })

    for (var i = 0; i < 1000; i++) {
        console.log (this.opponentName)
    }

    console.log (this.opponentName);

    form.greeting.hide ();

    this.messagingInfo.html (`You can now chat with ${this.opponentName}, your opponent`);
    this.messagingInput.show ();
    this.messageButton.show ();
    this.messageButtonClicked ();
    this.messageRecieved ();
}

messageButtonClicked () {    
    firebase.ref (`messages/player${this.index}`).set ({
       message : this.messagingInput.value(),
    })
}

messageRecieved () {
    // var opponentMessage;

    firebase.ref (`messages/player${this.opponentIndex}`).on ("value", function (data) {
        if (data) {
            this.opponentMessage = data.val ();
        }
    });
    
    if (this.opponentMessage) {
        this.displayMessage = createElement ("h6")
            .html(this.opponentMessage)
            .position(this.mEX, this.messageButton.y + 20)
            .class("greeting")
        ;
    }
}