//Card ID array
var cardIDs = []
for (var i = 0; i< 52; i++)
    {
        cardIDs.push(i)
    }
var roundCounter = 1
$roundCounter = $('#round-counter')
$p1Wins = $('p1-wins')


//Alert Box
var $alerts = $('.alert-box')
//List of Card Objects
var cards = [{
    rank: 'ace',
    suit: 'hearts',
    faceImg: 'n/a',
    value: 11
    },
    {
        rank: 'two',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 2
    },
    {
        rank: 'three',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 3
    },
    {
        rank: 'four',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 4
    },
    {
        rank: 'five',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 5
    },
    {
        rank: 'six',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'king',
        suit: 'hearts',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 11
    },
    {
        rank: 'two',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 2
    },
    {
        rank: 'three',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 3
    },
    {
        rank: 'four',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 4
    },
    {
        rank: 'five',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 5
    },
    {
        rank: 'six',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'king',
        suit: 'clubs',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 11
    },
    {
        rank: 'two',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 2
    },
    {
        rank: 'three',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 3
    },
    {
        rank: 'four',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 4
    },
    {
        rank: 'five',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 5
    },
    {
        rank: 'six',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'king',
        suit: 'diamonds',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'spades',
        faceImg: 'n/a',
        value: 11
    },
    {
        rank: 'two',
        suit: 'spades',
        faceImg: 'n/a',
        value: 2
    },
    {
        rank: 'three',
        suit: 'spades',
        faceImg: 'n/a',
        value: 3
    },
    {
        rank: 'four',
        suit: 'spades',
        faceImg: 'n/a',
        value: 4
    },
    {
        rank: 'five',
        suit: 'spades',
        faceImg: 'n/a',
        value: 5
    },
    {
        rank: 'six',
        suit: 'spades',
        faceImg: 'n/a',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'spades',
        faceImg: 'n/a',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'spades',
        faceImg: 'n/a',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'spades',
        faceImg: 'n/a',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'spades',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'spades',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'spades',
        faceImg: 'n/a',
        value: 10
    },
    {
        rank: 'king',
        suit: 'spades',
        faceImg: 'n/a',
        value: 10
    }]

//
var newDeck = false
var playIndex = 0
var game = {
    player: [{
            name: 'Player 1',
            index: 0,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
        },
        {
            name: 'Player 2',
            index: 1,
            hand: [],
            handValue:0,
            score: 0,
            busted: false,
        },
        {
            name:'House',
            index: 2,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
        }],

    shuffle: function(){
        console.log("Current Player: " + game.currentPlayer.name)
            var cloneArray = []
            //populate the clone
            for (var i = 0; i< 52; i++)
                {
                    cloneArray.push(cardIDs[i])
                }
            shuffleArray = []
            var randomCard
            for (var i=0; i<52; i++){
                randomCard = Math.floor(Math.random()*cloneArray.length)
                //console.log(randomCard)
                shuffleArray.push(cloneArray[randomCard])
                cloneArray.splice(randomCard,1)
            }
            console.log(shuffleArray)
            
    },
    deal: function(){
        game.currentPlayer.hand.push(cards[shuffleArray[0]])
        shuffleArray.splice(0,1)
        if (shuffleArray[0] === undefined)
            {
                game.shuffle()
                
                   // $(this).text("Deck is out of cards, new deck in play for remainder of round")
                   $alerts.fadeOut(10, function() { 
                    $alerts.text("Deck is out of cards, new deck in play for remainder of round")
                    $alerts.fadeIn(3000)
                    setTimeout(function(){$alerts.fadeOut(1000)}, 4000)
                  });


                newDeck = true
            }
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
            console.log(game.currentPlayer.name + "'s hand: " + game.currentPlayer.hand[i].rank + " of " + game.currentPlayer.hand[i].suit)
            }
        game.checkBust()
        if(game.currentPlayer != game.player[2] && game.currentPlayer.busted)
            {
                game.currentPlayer.handValue = 0;
                game.stay()
            }
        //console.log("Remaining Cards: " + shuffleArray)
    },
    stay: function(){
        game.houseRules()
    },
    checkBust: function(){
        var totalValue = 0;
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
               totalValue += game.currentPlayer.hand[i].value
            }
        if (totalValue > 21)
            {
                //Check if there's an ace and reassign the value to 1
                for (var i=0; i<game.currentPlayer.hand.length; i++)
                    {
                        if(game.currentPlayer.hand[i].rank === 'ace' && game.currentPlayer.hand[i].value === 11){
                            //console.log('Current Card : '+ player1Hand[i].rank + " = " + player1Hand[i].value)
                            game.currentPlayer.hand[i].value=1
                            //console.log(player1Hand[1].rank +" changed")
                            //Check again
                            game.checkBust()
                            //Do not return to function
                            return;
                        }
    
                    }
                //if there's no ace, then the player has busted and the function is over
                //Bust Actions
                //
                //
                console.log(game.currentPlayer.name + ' bust')
                game.currentPlayer.busted = true;
                return;
            }
        else{
            //Player has not busted
            game.currentPlayer.handValue = totalValue
            console.log(game.currentPlayer.name + ' no bust')
            game.currentPlayer.busted = false;
            return;
        }
    },
    updateScore: function(){
        game.currentPlayer.score += game.currentPlayer.handValue
        $p1Score.text('Current Score: ' + game.player[0].score)
        $p2Score.text('Current Score: ' + game.player[1].score)
    },
    houseRules: function(){
        game.currentPlayer = game.player[2]
        //debugger
        if(game.player[playIndex].handValue === 21){
                //Player gains score
                debugger
                game.currentPlayer = game.player[playIndex]
                game.updateScore()

                //change if new deck
                if (newDeck)
                {
                    playIndex += 1
                    if (playIndex === 2)
                        {
                            playIndex = 0

                        }
                    game.currentPlayer = game.player[playIndex]
                    newDeck = false
                }

            
                //Wipe hands
                game.player[0].busted = false
                game.player[1].busted = false
                game.player[2].busted = false
                newDeck = false

                game.player[0].hand = []
                game.player[1].hand = []
                game.player[2].hand = []

                return;
        }

        else if(game.currentPlayer.handValue >= game.player[playIndex].handValue)
            {
                console.log('House Wins!')
                //House Wins

                //change players if new deck
                if (newDeck)
                    {
                        playIndex += 1
                        if (playIndex === 2)
                            {
                                playIndex = 0
                                roundCounter +=1
                                $roundCounter.text('Round: ' + roundCounter)
                            }
                        newDeck = false
                    }
                    game.currentPlayer = game.player[playIndex]

                
                //Wipe hands
                game.player[0].busted = false
                game.player[1].busted = false
                game.player[2].busted = false
    
                game.player[0].hand = []
                game.player[1].hand = []
                game.player[2].hand = []
      
                return;
            }
            
        else if(game.currentPlayer.handValue < game.player[playIndex].handValue)
            {
                game.deal()
                    if(game.currentPlayer.busted){
                            //Player gains score
                            debugger
                            game.currentPlayer = game.player[playIndex]
                            game.updateScore()

                            //change if new deck
                            if (newDeck)
                                {
                                    playIndex += 1
                                    if (playIndex === 2)
                                        {
                                            playIndex = 0
                                            roundCounter +=1
                                            $roundCounter.text('Round: ' + roundCounter)
                                        }
                                    game.currentPlayer = game.player[playIndex]
                                    newDeck = false
                                }

                            
                        //Wipe hands
                        game.player[0].busted = false
                        game.player[1].busted = false
                        game.player[2].busted = false
                        newDeck = false
    
                        game.player[0].hand = []
                        game.player[1].hand = []
                        game.player[2].hand = []
    
                        return;
                    }
                    else{
                        game.houseRules()
                        return;
                    }
            }
    },
    reset: function(){
        game.player[0].score=0;
        game.player[1].score=0;
        game.player[0].handValue = 0;
        game.player[1].handValue = 0;
        game.player[2].handValue=0;
        game.player[0].busted = false;
        game.player[1].busted=false;
        game.player[2].busted=false;
        game.shuffle()
        game.updateScore()
        roundCounter = 1
        $roundCounter.text('Round : '+ roundCounter)
    }


    
}
game.currentPlayer = game.player[0]

 //Score for jQuery elements
 var $p1Score = $('#p1-Score')
 var $p2Score = $('#p2-Score')

//Disposable array of shuffled cards
var shuffleArray = []
//game initialize
game.shuffle()


/*
function houseRules(){
    game.currentPlayer = game.player[2]
    //debugger
    if(game.currentPlayer.handValue >= game.player[playIndex].handValue)
        {
            console.log('House Wins!')
            //House Wins
            game.currentPlayer = game.player[0]
            playIndex += 1
            if (playIndex === 2)
                {
                    playIndex = 0
                }
            //Wipe hands
            game.player[0].busted = false
            game.player[1].busted = false
            game.player[2].busted = false

            game.player[0].hand = []
            game.player[1].hand = []
            game.player[2].hand = []
  
            return;
        }
        
    else if(game.currentPlayer.handValue < game.player[0].handValue)
        {
            game.deal()
                if(game.currentPlayer.busted){
                        //Player 1 gains score
                        game.currentPlayer = game.player[0]
                        game.updateScore()
                    //Wipe hands
                    game.player[0].busted = false
                    game.player[1].busted = false
                    game.player[2].busted = false

                    game.player[0].hand = []
                    game.player[1].hand = []
                    game.player[2].hand = []

                    return;
                }
                else{
                    houseRules()
                    return;
                }
        }
}
*/
/*
function shuffle(){

    var cloneArray = []
    //populate the clone
    for (var i = 0; i< 52; i++)
        {
            cloneArray.push(cardIDs[i])
        }
    shuffleArray = []
    var randomCard
    for (var i=0; i<52; i++){
        randomCard = Math.floor(Math.random()*cloneArray.length)
        //console.log(randomCard)
        shuffleArray.push(cloneArray[randomCard])
        cloneArray.splice(randomCard,1)
    }
    console.log(shuffleArray)
    
}
*/

/*
function deal(){
    player1Hand.push(cards[shuffleArray[0]])
    shuffleArray.splice(0,1)
    for (var i=0; i<player1Hand.length; i++)
        {
        console.log("Player 1's Hand: " + player1Hand[i].rank + " of " + player1Hand[i].suit)
        }
    checkBust()
    //console.log("Remaining Cards: " + shuffleArray)
}
*/

/*
function stay(){
    var totalValue = 0;
    for (var i=0; i<player1Hand.length; i++)
        {
           totalValue += player1Hand[i].value
        }
    handValue = totalValue
}
*/

/*
function checkBust(){
    var totalValue = 0;
    for (var i=0; i<player1Hand.length; i++)
        {
           totalValue += player1Hand[i].value
           console.log('totalValue = ' + totalValue)
        }
    if (totalValue > 21)
        {
            debugger
            //Check if there's an ace and reassign the value to 1
            for (var i=0; i<player1Hand.length; i++)
                {
                    if(player1Hand[i].rank === 'ace'){
                        //console.log('Current Card : '+ player1Hand[i].rank + " = " + player1Hand[i].value)
                        player1Hand[i].value=1
                        //console.log(player1Hand[1].rank +" changed")
                        //Check again
                        checkBust()
                        //Do not return to function
                        return;
                    }

                }
            //if there's no ace, then the player has busted and the function is over
            //Bust Actions
            //
            //
            return;
        }
    else{
        //Player has not busted
        console.log('no bust')
        return;
    }
}
*/
/*
function updateScore(){
    p1Score += handValue
    $p1Score.text('Current Score: ' + p1Score)
}
*/