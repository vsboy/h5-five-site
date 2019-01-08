$(function(){
	navindex = $("#nav li").index($(".active"));
		$("#nav li").hover(function(){
		$("#nav li").removeClass("active");
		$(this).addClass("active");
		$("#nav li .nav_list").hide();
		$(this).find(".nav_list").show();
	},function(){
		$("#nav li").removeClass("active");
		$("#nav li").eq(navindex).addClass("active");
		$("#nav li .nav_list").hide();
	});
});