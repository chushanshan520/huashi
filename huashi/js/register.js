
$("#register").children(".margin").children(".cen").children(".ul1").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
		// console.log($(this).index());
        $(".cen").children("div").css("display","none").eq($(this).index()).css("display","block");
})

class regist{
		constructor() {
		    this.username=document.getElementsByClassName("username")[0];
			this.password=document.getElementsByClassName("password")[0];
			this.password1=document.getElementsByClassName("password1")[0];
			this.checkbox=document.getElementsByClassName("checkbox")[0];
			this.email=document.getElementsByClassName("email")[0];
			this.log=getCookie("log") ? JSON.parse(getCookie("log")) : [];
			this.sub=document.getElementsByClassName("sub")[0];
			this.reg();
		}
		
		reg(){
			var that=this;
			this.sub.onclick=function(){
				that.checkUser();
				
			}
		}
		checkUser(){
			var user=this.username.value; 
			var pass=this.password.value;
			var pass1=this.password1.value;
			var emi=this.email.value;
			var reg1=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
			var reg2=/^[a-zA-Z0-9]{4,10}$/;
			var reg3=/^\w+@\w+\.(com)$|(cn)$/;
			if(reg1.test(user) && reg2.test(pass) && reg3.test(emi) && pass==pass1 && this.checkbox.checked==true){
					alert("注册成功");
					this.setcoo();
				}else{
					alert("注册失败");
				}
			}
		
		setcoo(){
					this.log.push({
						name:this.username.value,
						pass:this.password.value
						
					})
					setCookie("log",JSON.stringify(this.log));
		}
		
	}
new regist();


