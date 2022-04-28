class Player {
    constructor () {
        this.index = 0;
        this.name;
        this.rank = 0;
        this.score = 0;
        this.positionY = 0;
        this.positionX = 0;
       
        this.opponentName;
        this.opponentIndex;

        this.displayMessage;
        this.opponentMessage

        this.mEX = width/2; //messaging Elements X

        this.messagingInfo = createElement("h6")
            .position (this.mEX, height/2)
            .class ("greeting")
        ;
        
        this.messagingInput = createInput ("type your message here")
            .position(this.mEX, this.messagingInfo.y + 60)
            .class("customInput")
            .hide()
        ;
        
        this.messageButton = createButton("Send")
            .position(this.mEX, this.messagingInput.y + 60)
            .class("customButton")
            .hide ()
        ;
        
        this.messageSetupExecuted = false;
        this.opponentMS = 0;
    }

    trackPlayerCount () {
        var playersRef = firebase.ref ("playerCount");
        playersRef.on ("value", (data) => {
            playerCount = data.val ();
        })
    }

    updatePlayerCount () {
        var playerCountRef = firebase.ref ("/").update({
            playerCount: playerCount,
        });
    }      

    newPlayer () {
        this.index = playerCount;
        this.name = form.nameInput.value ();

        if (this.index == 1) {
            this.positionX = 115; // y = height - 60
            this.opponentIndex = 2;
        }   else {
            this.positionX = 2;
            this.opponentIndex = 1;
        }

        var playerInfoC = `players/player${this.index}`;

        firebase.ref (playerInfoC).set ({
            name: this.name,
            rank: 0,
            score: 0,
            positionX: this.positionX,
            positionY: this.positionY
        });

        console.log (`${this.index} ${this.positionX} ${this.name} ${playerCount}`);
    }

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

    hideMessage () {
        this.messagingInfo.hide();
        this.messageButton.hide();
        this.messagingInput.hide
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
}