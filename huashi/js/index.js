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
	$("#list .left .ul2").css("display","inline-block");
},function(){
	$("#list .left .ul2").css("display","none");
})

 $("#shop").children(".top").children("li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
	
        $(".bto").children("li").css("display","none").eq($(this).index()).css("display","block");
})

$("#fix").children(".tab").children(".ul1").children(".ren").click(function(){
	$(this).parent().siblings().toggle(1000);
})


class List{
			constructor(options) {
				    this.url=options.url;
					this.cont=options.cont;
					this.load();
				}
				load(){
					var that=this;
					ajaxGet(this.url,function(res){
						
						that.res=JSON.parse(res);
						that.display();
						that.addEvent();
					})
				}
				

				display(){
					var str="";
					for(var i=0;i<this.res.length;i++){
						str+=`
							
							<li>
								<a href="#"><img src="${this.res[i].img.img1}"/></a>
								<a href="#">${this.res[i].name}</a>
								<i>${this.res[i].price.price1}</i><s>${this.res[i].price.price2}</s>
							</li>
						`;
					}
					this.cont.innerHTML=str;
				}
}

			new List({
				url:"http://localhost/test1910/花市网/json/goods.json",
				cont:$("#msg .right ul")
			})