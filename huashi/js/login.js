
$("#login").children(".margin").children(".right").children(".ul1").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
		
        $(".right").children("div").css("display","none").eq($(this).index()).css("display","block");
})

class login{
		constructor() {
		   this.idname=document.getElementsByClassName("idname")[0];
		   this.idword=document.getElementsByClassName("password")[0];
		   this.log=getCookie("log") ? JSON.parse(getCookie("log")) : [];
		   this.idsub=document.getElementsByClassName("sub")[0];
		   this.check();
		}
		
		check(){
			var that=this;
			this.idsub.onclick=function(){
				that.getcoo();
			}
		}
		
		getcoo(){
			var log=JSON.parse(getCookie("log"));
			for(var i=0;i<log.length;i++){
				if(log[i].name!=this.idname.value){
					alert("未注册，去注册");
					break;
				}
				if(log[i].name==this.idname.value && log[i].pass!=this.idword.value){
					alert("密码不对");
					break;
				}
				if(log[i].name==this.idname.value && log[i].pass==this.idword.value){
					this.go();
					break;
				}
			}
		}
		go() {
		    location.href ="../html/index.html";
		}
	}
	
	new login();