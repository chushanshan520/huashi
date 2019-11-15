
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
							this.cen=options.cen;
							this.shop=getCookie("shop") ? JSON.parse(getCookie("shop")) : [];
							this.goods=getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
							this.load();
							this.addEvent();
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
							// console.log(1);
							var str="";
							for(var i=0;i<this.res.length;i++){
								str+=`
									<li index="${this.res[i].id}">
										<a href="details.html"><img src="${this.res[i].img.img1}" /></a>
										<h2>${this.res[i].name}</h2>
										<p>${this.res[i].lang}</p>
										<h3><i>${this.res[i].price.price1}</i><s>${this.res[i].price.price2}</s></h3>
										<input type="submit" value="加入购物车"/>
									</li> 
								`;
							}
							this.cen.innerHTML=str;
						}
						details(){
							var that=this;
							this.cen.addEventListener("click",function(eve){
								if(eve.target.tagName=="IMG"){
									that.id=eve.target.parentNode.parentNode.getAttribute("index");
									that.setCoo1();
								}
							})
						}
						
						addEvent(){
							var that=this;
							this.cen.addEventListener("click",function(eve){
								if(eve.target.tagName=="INPUT"){
									that.id=eve.target.parentNode.getAttribute("index");
									that.setCoo();
									alert("加入购物车");
								}
							})
								
						}
						
						setCoo(){
								var that=this;
								if(this.shop.length==0){
									this.shop.push({
										id:this.id,
										num:1
									})
								}else{
									var onoff=true;
									for(var i=0;i<this.shop.length;i++){
										if(this.shop[i].id==this.id){
											this.shop[i].num++;
											onoff=false;
										}
									}
								}
								if(onoff){
									this.shop.push({
										id:this.id,
										num:1
									})
								}
								// console.log(this.shop);
								setCookie("shop",JSON.stringify(this.shop));
						}
					
					setCoo1(){
						setCookie("goods",JSON.stringify(this.id));
					}
						
		}
		new List({
			url:"http://localhost/test1910/花市网/json/goods.json",
			cen:document.querySelector("#cen .ul1")
		})
		new List({
			url:"http://localhost/test1910/花市网/json/goods.json",
			cen:document.querySelector("#cen .ul2")
		})
		new List({
			url:"http://localhost/test1910/花市网/json/goods.json",
			cen:document.querySelector("#cen .ul3")
		})
		new List({
			url:"http://localhost/test1910/花市网/json/goods.json",
			cen:document.querySelector("#cen .ul4")
		})
		new List({
			url:"http://localhost/test1910/花市网/json/goods.json",
			cen:document.querySelector("#cen .ul5")
		})
		
	