var code;
var pts = 0;
var asdfUsed = 0;
var qwertyUsed = 0;

$(document).ready(function() {
	$("#points").append("0");
});

function codeTest() {
	code = document.getElementById('code');
	if(code.value == "asdf")
	{
		if (asdfUsed == 0) {
			pts = pts + 1;
			alert(pts);
			$(document).ready(function() {
				$('#points').empty();
				$("#points").append("<p>" + pts + "</p>");
			});
		} else {
			alert("You have already used that code!")
		}
		asdfUsed = 1;
	} else if(code.value == "qwerty") {
		if (qwertyUsed == 0) {
			pts++;
			alert(pts);
			$(document).ready(function() {
				$('#points').empty();
				$("#points").append("<p>" + pts + "</p>");
			});
		} else {
			alert("you hava already used that code!");
		}
		qwertyUsed = 1;
	}
}