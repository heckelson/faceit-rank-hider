/* Faceit Rank Hider by heckelson */

window.onload = function() {
	console.log("Using Faceit Rank Hider by heckelson. ");
	removeFaceitRankIcons();
}

setInterval(removeFaceitRankIcons, 1000);

/* Sets opacity of all ids which are passed as an array to 0.*/
function removeFaceitRankIcons() {
	
	/* each of the 10 possible levels has its own id starting with f_icon_. */
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
		document.getElementById(each_id).style.opacity = 0;
	}
	

}
