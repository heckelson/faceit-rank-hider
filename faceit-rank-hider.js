
console.log("Faceit rank hider loaded.");

window.onload = function() {
	console.log("Window loaded.");
	
	removeFaceitRanks();
}

function removeFaceitRanks() {
	var banned_ids = [
		"f_icon_ee1c08a8", //  1
		"f_icon_230d8c21", //  2
		"f_icon_32f1620f", //  3
		"f_icon_5b6bcc44", //  4
		"f_icon_7ed073b0", //  5
		"f_icon_15a7d3ad", //  6
		"f_icon_e3d9d650", //  7
		"f_icon_0e5c44d1", //  8
		"f_icon_e6c73405", //  9
		"f_icon_aff4d555", // 10
	];

	for (var each_id of banned_ids) {
		var icon = document.getElementById(each_id);
		if (icon != null && icon != undefined) {
			icon.remove();
			console.log("Removing Rank icon: " + each_id + "...");
		}
		else {
			console.log(each_id + " not found.");
		}
	}
}