var c1;
var c2;
var c3;
var c4;
var delayTimer;
var deck;
var flipAnimation;

function preload()
{
}


function setup()
{
	createCanvas(1300,1000);

	var flipAnimation = new Array(5);
	flipAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	flipAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	flipAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	flipAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	flipAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	flipAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');



	var flippedCard = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Red%20Bicycle%20Back.png');
	var card1 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Demander%20text.png');
	var card2 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Demander.png');
	var card3 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Mettre%20text.png');
	var card4 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Mettre.png');
	var card5 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Rester%20text.png');
	var card6 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Rester.png');
	var card7 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Savoir%20text.png');
	var card8 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Savoir.png');
	var card9 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Un%20ananas%20text.png');
	var card10 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Un%20ananas.png');
	var card11 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Un%20steak%20text.png');
	var card12 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Un%20steak.png');
	var card13 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Une%20banane%20text.png');
	var card14 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Une%20banane.png');
	var card15 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Une%20pomme%20text.png');
	var card16 = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Card%20Matching%20Game%20Pics/Une%20pomme.png');

	deck = new CardDeck(150,200,2,8,flippedCard,true);
	deck.setFlipAnimation(flipAnimation);
	deck.addCard(card1,0);
	deck.addCard(card2,0);
	deck.addCard(card3,1);
	deck.addCard(card4,1);
	deck.addCard(card5,2);
	deck.addCard(card6,2);
	deck.addCard(card7,3);
	deck.addCard(card8,3);
	deck.addCard(card9,4);
	deck.addCard(card10,4);
	deck.addCard(card11,5);
	deck.addCard(card12,5);
	deck.addCard(card13,6);
	deck.addCard(card14,6);
	deck.addCard(card15,7);
	deck.addCard(card16,7);


	// delay timer
	delayTimer = new Timer(0,0,0,0);
	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(3);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


}

function draw()
{
	background(255,255,255);

	// if the game is finished
	if (deck.showDeck() == 1)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("Endgame/endgame.html","_self");
	}

	// everytime a card match has been found DO SOMETHING
	if (deck.checkMatch() >= 1)
	{
		console.log('match found');



		// initiate a delay timer when a question is answered
		delayTimer.startTimer();
		if (delayTimer.isTimerFinished() == true)
		{
			if (deck.checkMatch() == 1)
			{
				deck.checkMatch("reset");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			else if (deck.checkMatch() == 2)
			{
				deck.checkMatch("remove");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			delayTimer.resetTimer();
		}
	}

}
