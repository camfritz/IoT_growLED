var i, tabcontent;

$(document).ready(function() {
	console.log("Ready!");
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		if(i != 0) {
			tabcontent[i].style.display = "none";
		}
	}
});

function openTab(event, selTab) {
	var tab;

	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tabs = document.getElementsByClassName("tab");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
	}

	document.getElementById(selTab).style.display = "block";
	event.currentTarget.className += " active";
}

function callPower(event) {
	powerState = event.currentTarget.innerHTML;
	console.log(powerState);

	if(powerState == 'On') {
		event.currentTarget.innerHTML = 'Off';
	}
	else {
		event.currentTarget.innerHTML = 'On';
	}
}