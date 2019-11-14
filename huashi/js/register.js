
$("#register").children(".margin").children(".cen").children(".ul1").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
		// console.log($(this).index());
        $(".cen").children("div").css("display","none").eq($(this).index()).css("display","block");
})




