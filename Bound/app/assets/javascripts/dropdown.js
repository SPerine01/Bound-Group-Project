$(document).ready(function(){
	$("#sub_butt").click(function(){
	if ( $("fieldset").css("display") == "none");
		$("fieldset").css("display","block");
		$("#directions").css("display","inline-block");
		$("#duration-distance").css("display","block");
	if ( $("#map").css("margin-left") == (70/100)*100)"%";
		$("#map").css("margin-left", "20%");
	});
});

