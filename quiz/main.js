function check() {
	var ans1 = document.quiz.q1.value,
		ans2 = document.quiz.q2.value,
		ans3 = document.quiz.q3.value,
		correct = 0,
		range;
	if(ans1 == "India") {
		correct++;
	}
	if(ans2 == "Delhi") {
		correct++;
	}	
	if(ans3 == "NewYork") {
		correct++;
	}
	var pictures = ["img/win.gif", "img/med.gif", "img/bad.gif"];
	var messages = ["GREAT !!", "This will do for now !", "You better work harder..."];
	if(correct == 0) {
		range = 2;
	}
	if(correct>0 && correct<3) {
		range = 1;
	}
	if(correct>2) {
		range = 0;
	}

	document.getElementById("block2").style.display = "inline-block";
	document.getElementById("ans-correct").innerHTML = "You Got "+ correct +" correct answers";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("pic").src = pictures[range];
}
