//Card ID array
var cardIDs = []
for (var i = 0; i< 52; i++)
    {
        cardIDs.push(i)
    }
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

var game = {
    player: [{
            name: 'Player 1',
            index: 0,
            hand: [],
            handValue: 0,
            score: 0,
        },
        {
            name: 'Player 2',
            index: 1,
            hand: [],
            handValue:0,
            score: 0,
        },
        {
            name:'House',
            index: 2,
            hand: [],
            handValue: 0,
            score: 0,
        }],
    
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
                //console.log(randomCard)
                shuffleArray.push(cloneArray[randomCard])
                cloneArray.splice(randomCard,1)
            }
            console.log(shuffleArray)
            
    },
    deal: function(){
        game.currentPlayer.hand.push(cards[shuffleArray[0]])
        shuffleArray.splice(0,1)
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
            console.log("Player 1's Hand: " + game.currentPlayer.hand[i].rank + " of " + game.currentPlayer.hand[i].suit)
            }
        game.checkBust()
        //console.log("Remaining Cards: " + shuffleArray)
    },
    stay: function(){
        var totalValue = 0;
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
               totalValue += game.currentPlayer.hand[i].value
            }
        game.currentPlayer.handValue = totalValue
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
                console.log('totalValue = ' + totalValue)
                console.log('bust')
                return;
            }
        else{
            //Player has not busted
            console.log('totalValue = ' + totalValue)
            game.currentPlayer.handValue = totalValue
            console.log('no bust')
            return;
        }
    },
    updateScore: function(){
        game.currentPlayer.score += game.currentPlayer.handValue
        $p1Score.text('Current Score: ' + game.player[0].score)
        $p2Score.text('Current Score: ' + game.player[1].score)
    }


    
}
game.currentPlayer = game.player[0]

 //Score for jQuery elements
 var $p1Score = $('#p1-Score')
 var $p2Score = $('#p2-Score')

var handValue = 0;

//Disposable array of shuffled cards
var shuffleArray = []

function houseRules(){
    game.currentPlayer = game.player[2]
    if(game.currentPlayer.handValue < game.player[0].handValue)
        {
            game.deal()
                if(game.checkBust)
                    {
                        //Player 1 gains score
                        //Wipe hands
                        game.currentPlayer = game.player[0]
                    }
        }
    else if(game.currentPlayer.handValue >= game.player[0].handValue)
        {
            game.stay()
            //House Wins
            game.currentPlayer = game.player[0]
        }
}

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