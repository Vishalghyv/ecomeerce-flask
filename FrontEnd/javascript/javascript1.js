$("#listing").on("click",function(){
	$(".add").css("display","none");
	$(".order").css("display","none");
	$(".delete").css("display","none");
	$(".modify").css("display","none");
	$(".listing").css("display","flex");
})
$("#order").on("click",function(){
	$(".add").css("display","none");
	$(".order").css("display","flex");
	$(".delete").css("display","none");
	$(".modify").css("display","none");
	$(".listing").css("display","none");
})
$("#add").on("click",function(){
	$(".add").css("display","flex");
	$(".order").css("display","none");
	$(".delete").css("display","none");
	$(".modify").css("display","none");
	$(".listing").css("display","none");
})
$("#delete").on("click",function(){
	$(".add").css("display","none");
	$(".order").css("display","none");
	$(".delete").css("display","flex");
	$(".modify").css("display","none");
	$(".listing").css("display","none");
})
$("#modify").on("click",function(){
	$(".add").css("display","none");
	$(".order").css("display","none");
	$(".delete").css("display","none");
	$(".modify").css("display","flex");
	$(".listing").css("display","none");
})

