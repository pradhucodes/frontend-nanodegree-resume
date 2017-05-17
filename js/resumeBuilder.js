function displayWork() {
	var formattedName = HTMLheaderName.replace("%data%","Pradhuman Swami");
	var formattedRole = HTMLheaderRole.replace("%data%","Frontend Developer");
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
}
displayWork();
$(document).click(function(loc) {console.log(loc.pageX,loc.pageY);});