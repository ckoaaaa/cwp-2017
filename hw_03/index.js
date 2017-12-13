window.onload = function(){
	document.getElementById("yahoo").addEventListener("click", goToYahoo)
	document.getElementById("yahoo").addEventListener("auxclick", goToYahooBlank)

	function goToYahoo(){
		this.href = "https://yahoo.com"
	}

	function goToYahooBlank(){
		this.href = "https://yahoo.com"
		this.target = "_blank"
	}

	document.getElementById("number_01").addEventListener("keyup", addition);
document.getElementById("number_02").addEventListener("keyup", addition);
function addition(){
	var a = document.getElementById("number_01").value;
	var b = document.getElementById("number_02").value;
	var total = a + b;
	document.getElementById("result")
}
}


