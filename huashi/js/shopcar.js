
		$("#reu .left p").hover(function(){
			$("#reu .ul1").css("display","block");
			$("#reu .left .ul1 li").hover(function(){
				$("#reu .left .ul2").children("li").css("display","none").eq($(this).index()).css("display","inline-block");
			},function(){
				$("#reu .left .ul2").hover(function(){
				},function(){
				$("#reu .left .ul2").children("li").css("display","none");
				$("#reu .ul1").css("display","none");
				})
			})
		
		},function(){
		})
		
	class List{
		constructor(options) {
				this.url=options.url;
				this.car=options.car;
				this.shop=getCookie("shop") ? JSON.parse(getCookie("shop")) : [];
				this.prices=getCookie("prices") ? JSON.parse(getCookie("prices")) : [];
				this.load();
				this.p=document.querySelector("#car p b");
				this.all=document.querySelector("#car h3 input.all");
				// this.more=document.getElementsByClassName(".more");
				
				this.removeEvent();
				
			}
			load(){
				var that=this;
				ajaxGet(this.url,function(res){
					that.res=JSON.parse(res);
					that.display();
					that.more=document.getElementsByClassName("more");
					that.emvalue=document.querySelector("em");
					that.selectAll();
				})
			}

		display(){
				var str="";
				for(var i=0;i<this.shop.length;i++){
					for(var j=0;j<this.res.length;j++){
						if(this.shop[i].id==this.res[j].id){
							str+=`
								<td index="${this.shop[i].id}">
									<input type="checkbox" class="more"/>
									<em>${this.res[j].name}</em>
									<img src="${this.res[j].img.img1}" />
									<h2>价格：<b>${this.res[j].price.price1}</b><input type="number" min="1" value="${this.shop[i].num}" class="num"/></h2>
									<h4><b>删除</b></h4>
								</td>
								
							`;
								
						}
					}
					
				}
			this.car.innerHTML=str;
			
			
		}
		

		removeEvent(){
			var that=this;
			this.car.addEventListener("click",function(eve){
				if(eve.target.tagName=="B"){
					that.id=eve.target.parentNode.parentNode.getAttribute("index");
					eve.target.parentNode.parentNode.remove();
					that.removeCookie();
				}
			})
			
			this.car.addEventListener("input",function(eve){
				if(eve.target.tagName=="INPUT"){
					that.id=eve.target.parentNode.parentNode.getAttribute("index");
					that.value=eve.target.value;
					that.changeCookie();
					// console.log(that.shop);
					// if(eve.target.className=="num"){
					// 		pri=eve.target.previousElementSibling.innerHTML.slice(1);
					// 		for(var i=0;i<that.shop.length;i++){
					// 			if(that.shop[i].id==that.id){
					// 				count=Number(that.value)*pri;
					// 			}
					// 		}
					// 		that.p.innerHTML=count;
					// }
						
					
				}
			})
		}
		
		removeCookie(){
			for(var i=0;i<this.shop.length;i++){
				if(this.shop[i].id==this.id){
					this.shop.splice(i,1);
				}
			}
			setCookie("shop",JSON.stringify(this.shop));
		}
		
		changeCookie(){
			for(var i=0;i<this.shop.length;i++){
				if(this.shop[i].id==this.id){
					this.shop[i].num=this.value;
				}
			}
			setCookie("shop",JSON.stringify(this.shop));
			
		}
		
	
		selectAll(){
			var that=this;
			this.all.onclick=function(){
				for(var i=0;i<that.more.length;i++){
					that.more[i].checked=that.all.checked;
				}
				if(that.all.checked==true){
					that.selvalue();
					
				}else{
					that.p.innerHTML=0;
				}
			}
			
		}
		
		selvalue(){
			var that=this;
			var shopvalue=0;
			var resvalue=0;
			// console.log(this.res[1].price.price1);
			for(var i=0;i<this.shop.length;i++){
				for(var j=0;j<this.res.length;j++){
					if(this.shop[i].id==this.res[j].id){
						shopvalue+=Number(this.shop[i].num)*Number(this.res[j].price.price1.slice(1));
						that.p.innerHTML=shopvalue;
					}
				}
			}
		
		}

	}
	new List({
		url:"http://localhost/test1910/花市网/json/goods.json",
		car:document.querySelector("#car table tr")
	})
	