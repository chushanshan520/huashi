
$("#login").children(".margin").children(".right").children(".ul1").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
		
        $(".right").children("div").css("display","none").eq($(this).index()).css("display","block");
})