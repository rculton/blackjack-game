//Card ID array, this is a new deck order index to be used with the cards object
var cardIDs = []
for (var i = 0; i< 52; i++)
    {
        cardIDs.push(i)
    }

//List of Cards, these are in New Deck Order and indexed with cardIDs
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
    //create a list of players with properties
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
    //a function to shuffle our card index    
    shuffle: function(){

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
                shuffleArray.push(cloneArray[randomCard])
            }           
    },
    //A function to put cards into players "hands"
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
    },
    //A function to perform "stay" action. Possible use later when switching between 2 players BEFORE going to house
    stay: function(){
        game.houseRules()
    },
    //check for hand value, and if it exceeds 21
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
                            game.currentPlayer.hand[i].value=1
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
    //Update the score of the players during round
    updateScore: function(){
            game.currentPlayer.score += 1
            $p1Score.text('Current Round Score: ' + game.player[0].score)
            $p2Score.text('Current Round Score: ' + game.player[1].score)
    },
    //Update the win count, and reset the scores
    updateWins: function(){
        debugger
        if(game.player[0].score > game.player[1].score){
            p1Score +=1
            $Wins.text("Player 1 Wins: "+ p1Score + " |  Player 2 Wins: "+ p2Score)
        }
        else if(game.player[0].score < game.player[1].score){
            p2Score +=1
            $Wins.text("Player 1 Wins: "+ p1Score + " |  Player 2 Wins: "+ p2Score)
        }
        else{
            $alerts.fadeOut(10, function() { 
                $alerts.text("Tie Game, no points awarded! Try Again!")
                $alerts.fadeIn(3000)
                setTimeout(function(){$alerts.fadeOut(1000)}, 4000)
              });
        }
        game.player[0].score = 0
        game.player[1].score = 0
    },
    //AI for the house play. House MUST either beat the player, or bust.
    houseRules: function(){
        game.currentPlayer = game.player[2]
        if(game.player[playIndex].handValue === 21){
                //Player gains score                
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
                            game.updateWins()


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
                                game.updateWins()
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
                                            game.updateWins()
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
    //Reset the game to a starting state
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

//add a currentPlayer to the game object, for easier referencing
game.currentPlayer = game.player[0]

 //pre-query the sore fields for easy reference
 var $p1Score = $('#p1-Score')
 var $p2Score = $('#p2-Score')

 //a counter for the current round, and it's jquery field
 var roundCounter = 1
 $roundCounter = $('#round-counter')

 //elements for tracking, displaying, and calculating the wins
 $Wins = $('#win-counter')
 p1Score = 0
 p2Score = 0
 
 //Alert Box jquery, for later access
 var $alerts = $('.alert-box')

//Disposable array of shuffled cards, allows us to maintain a "new deck order" and remove cards from play
var shuffleArray = []
//game initialize
game.shuffle()