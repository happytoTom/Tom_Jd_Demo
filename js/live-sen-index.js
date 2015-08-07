$(document).ready(function(){
	$(".admision-menu span").click(function(){
		$(this).addClass("admision-menu-on").siblings().removeClass("admision-menu-on");
		$(this).parent().parent().parent().find(".ticket-msg").hide();
		$(this).parent().parent().parent().find(".ticket-msg").eq($(this).parent().find("span").index(this)).show();
	})
})