var b1;
var bg;

function setup()
{
	createCanvas(1200,670);
	b1 = new Button(10,10,100,25);
	b1.setText("Main Menu");
	b1.setTextOver("Proceed?");
	b1.setButtonOverFill(255,255,50);

	bg = loadImage('https://ps20123205.github.io/Y10-Computer-Design/Eiffel%20Tower.jpg')

}

function draw()
{
	background(125,125,125);

	image(bg,0,0)

	fill(255,255,255);
	text("To use the correct form of a French verb, you have to use the right tense. The indicative mood, which deals with objectivity - things really happening — includes many time aspects called tenses. A tense defines the time",12,100);
	text("frame in which the action of the verb takes place: past, present, or future. For the simple purposes of this game, only the PRESENT tense will be used.",12,120);
	text("Like English, there is an infinitive to every French verb (e.g. to eat). These infinitives end with -er, -re, or -ir, and they are conjugated differently depending on their infinitive endings. Please refer below to the conjugation",12,140);
	text("of REGULAR -er verbs.",12,160);
	text("Example of regular verbs with -er ending --> Danser (to danse)",12,200);
	text("Je (I) dansE",12,220);
	text("Tu (you) dansES",12,240);
	text("Il/Elle (He/She) dansE",12,260);
	text("Nous (We) dansONS",12,280);
	text("Vous (You guys) dansEZ",12,300);
	text("Ils/Elles (They [Masculine/Feminine]) dansENT",12,320);
	text("Here are some important, commonly-used infinitive words and nouns that you should know about! Some of these may even be tested in a game :)",12,360);
	text("Manger - To eat",12,380);
	text("Demander - To ask",12,400);
	text("Mettre - To put",12,420);
	text("Savoir - To know",12,440);
	text("Rester - To stay",12,460);
	text("Un ananas - A pineapple",12,480);
	text("Une banane - A banana",12,500);
	text("Un steak - A steak",12,520);
	text("Une pomme - An apple",12,540);
	text("Des raisins - Some grapes",12,560);
	text("Finally, to ask someone a question, the verb and the noun should always be reversed! For instance, instead of saying you are ...? in French, you say are-you ...? Just like English!",12,600);
	text("E.g. SONT-ILS en train de filmer une vidéo? (Literal translation: ARE-THEY filming a video?)",12,620);
  text("Congratulations! You are officially a French-certified dummy! Feeling confident? Try out the two game modes for a challenge :)",12,660);



	b1.showButton();

  // The code "_self" disables opening in another tab

	if (b1.getButtonState() == 1)
	{
		window.open("../MainMenu.html","_self");
	}

}
