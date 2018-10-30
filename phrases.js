function makePhrases() {
	var words1 = ["Baseheads", "locally approach", "all", "spark plugs"];
	var words2 = ["Total disregard", "for a dying man's", "shark jump"];
	var words3 = ["Post-meridiem", "pretty tungsten", "attracts", "any", "once—pale horse", "painted gunmetal black"];
	var words4 = ["Face masking", "hard-shelled", "ebony propeller hat"];
	var words5 = ["Clubmans", "gloved rakes", "grappling the clutch span"];
	var words6 = ["Tuck go the steel toe", "metal gate spreading",
"For the dead-alive", "that rented parking space 37"];
	var words7 = ["2000", "out the weekly", "under", "Cycles to Gehenna", "gets him floating", "over 20 busses"];
	var words8 = ["Fireproof and festive",
"corners", "like a", "two-tired tiger", "so", "a", "too-tired rider", "can accumulate", "a few excited fibers", "to assign"];
	var words9 = ["Knows no zen", "in the", "art of maintenance",
"only as", "the orchestrated patron", "saint of changing lanes", "baby"];
    var words10 = ["Here is how", "a great escape", "goes", "when you", "can't take", "your", "dead friends names", "out your phone"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var rand4 = Math.floor(Math.random() * words4.length);
    var rand5 = Math.floor(Math.random() * words5.length);
    var rand6 = Math.floor(Math.random() * words6.length);
    var rand7 = Math.floor(Math.random() * words7.length);
    var rand8 = Math.floor(Math.random() * words8.length);
    var rand9 = Math.floor(Math.random() * words9.length);
    var rand10 = Math.floor(Math.random() * words10.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + " " + words4[rand4] + " " + words5[rand5] + " " + words6[rand6] + " " + words7[rand7] + " " + words8[rand8] + " " + words9[rand9] + " " + words10[rand10];
    document.write(phrase);
}
makePhrases();