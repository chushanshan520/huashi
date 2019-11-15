$("#banner").banner({
	        imgs:$("#banner").find("img"),   
	        left:$("#banner").find("#left"),  
	        right:$("#banner").find("#right"), 
	        list:true,        
	        autoPlay:true,    
	        delayTime:2000,    
	        moveTime:200,     
	        listBgColor:"red"
	})
	
	$("nav ul li.list1 a").hover(function(){
		$("nav ul li.list1 p").css("display","block");
	},function(){
		$("nav ul li.list1 p").css("display","none");
	})
	
	$("nav ul li.list2 a").hover(function(){
		$("nav ul li.list2 p").css("display","block");
	},function(){
		$("nav ul li.list2 p").css("display","none");
	})
	
	$("#list .left .ul1 li").hover(function(){
		$("#list .left .ul2").children("li").css("display","none").eq($(this).index()).css("display","inline-block");
		
	},function(){
		$("#list .left .ul2").hover(function(){
		},function(){
			$("#list .left .ul2").children("li").css("display","none");
		})
	})
	
	 $("#shop").children(".top").children("li").click(function(){
	        $(this).addClass("active").siblings().removeClass("active");
		
	        $(".bto").children("li").css("display","none").eq($(this).index()).css("display","block");
	})
	
	$("#fix").children(".tab").children(".ul1").children(".ren").click(function(){
		$(this).parent().siblings().toggle(1000);
	})
	
	$("#fix .tab .ul1").children("li:not(.ren)").click(function(){
	    var i = $(this).index();
	    var now = $("#msg .floor").eq(i-1);
	    
	    var t = now.offset().top+20;
	    $("html").animate({
	        scrollTop:t
	    })
	})
	
	class List{
				constructor(options) {
					    this.url=options.url;
						this.cont=options.cont;
						this.logname=document.getElementsByClassName("logname")[0];
						this.logpass=document.getElementsByClassName("logpass")[0];
						this.logsub=document.getElementsByClassName("sub")[0];
						this.goods=getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
						this.log=getCookie("log") ? JSON.parse(getCookie("log")) : [];
						this.load();
						this.check();
					}
					load(){
						var that=this;
						ajaxGet(this.url,function(res){
							that.res=JSON.parse(res);
							that.display();
							that.details();
						})
					}
					
					display(){
						var str="";
						for(var i=0;i<this.res.length;i++){
							str+=`
								<li index="${this.res[i].id}">
									<a href="details.html"><img src="${this.res[i].img.img1}"/></a>
									<a href="#">${this.res[i].name}</a>
									<i>${this.res[i].price.price1}</i><s>${this.res[i].price.price2}</s>
								</li>
							`;
						}
						this.cont.innerHTML=str;
					}
					
					details(){
						var that=this;
						this.cont.addEventListener("click",function(eve){
							if(eve.target.tagName=="IMG"){
								that.id=eve.target.parentNode.parentNode.getAttribute("index");
								that.setCoo();
							}
						})
					}
					
					setCoo(){
						setCookie("goods",JSON.stringify(this.id));
						
					}
					check(){
						var that=this;
						this.logsub.onclick=function(){
							that.getcoo();
						}
					}
					getcoo(){
						var lognum=JSON.parse(getCookie("log"));
						console.log(lognum);
						for(var i=0;i<lognum.length;i++){
							if(this.logname.value!=lognum[i].name){
								alert("未注册，去注册");
							}
							if(this.logname.value==lognum[i].name && lognum[i].pass!=this.logpass.value){
								alert("密码不对");
							}
							
							if(this.logname.value==lognum[i].name && lognum[i].pass==this.logpass.value){
								this.go();
								break;
							}
						}
						
					}
					go(){
						location.href ="../html/index.html";
					}
					

	}
	
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right ul")
				})
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right1 ul")
				})
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right2 ul")
				})
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right3 ul")
				})
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right4 ul")
				})
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					cont:document.querySelector("#msg .floor .right5 ul")
				})