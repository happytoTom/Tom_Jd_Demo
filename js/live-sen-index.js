$(document).ready(function(){
	$(".admision-menu span").click(function(){
		$(this).addClass("admision-menu-on").siblings().removeClass("admision-menu-on");
		$(this).parent().parent().parent().find(".ticket-msg").hide();
		$(this).parent().parent().parent().find(".ticket-msg").eq($(this).parent().find("span").index(this)).show();
	})

	$(".tab-menu li").click(function(){
		$(this).addClass("onbtom").siblings().removeClass("onbtom");
		$(this).parent().parent().parent().find(".sen-kill-order").hide();
		$(this).parent().parent().parent().find(".sen-kill-order").eq($(this).parent().find("li").index(this)).show();
	})
})