
	$("#list .left p").hover(function(){
		$("#list .ul1").css("display","block");
		$("#list .left .ul1 li").hover(function(){
			$("#list .left .ul2").children("li").css("display","none").eq($(this).index()).css("display","inline-block");
		},function(){
			$("#list .left .ul2").hover(function(){
			},function(){
			$("#list .left .ul2").children("li").css("display","none");
			$("#list .ul1").css("display","none");
			})
		})

	},function(){
	})
	
	 $(".pagination").pagination(100,{
	        items_per_page:2,
	        num_display_entries:3,
	        num_edge_entries:2,
	        current_page:10,
	        prev_text:"上一页",
	        ellipse_text:"---",
	        prev_show_always:false,
	        
	    })
		
	
	

		class List{
				constructor(options) {
					    this.url=options.url;
						this.spe=options.spe;
						this.id=JSON.parse(getCookie("goods"));
						this.goods=getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
						this.shop=getCookie("shop") ? JSON.parse(getCookie("shop")) : [];
						this.load();
					}
					load(){
						var that=this;
						ajaxGet(this.url,function(res){
							that.res=JSON.parse(res);
							that.display();
							that.addEvent();
							that.left1 = document.getElementsByClassName("left1")[0];
							that.box = document.querySelector(".box");
							that.left2 = document.getElementsByClassName("left2")[0];
							that.more=document.querySelectorAll(".more img")[0];
							that.imgs=document.querySelectorAll(".more img");
							that.big = document.getElementsByClassName("big")[0];
							that.bigArea();
							that.change();
						})
					}
					
					display(){
						var str="";
						for(var i=0;i<this.res.length;i++){
							
							if(this.res[i].id==this.id){
	
								str+=`
									<div class="left1">
										<img src="${this.res[i].img.img1}" class="big"/>
										<div class="more">
											<img src="${this.res[i].img.img1}" />
											<img src="${this.res[i].img.img2}" />
											<img src="${this.res[i].img.img3}" />
										</div>
										<div class="box"></div>
									</div>
									<div class="left2" style="background: url(${this.res[i].img.img1}) no-repeat;background-size: cover ;">
										
									</div>
									<div class="right">
										<h2>${this.res[i].name}</h2>
										<p class="p2">
											${this.res[i].introduce}
										</p>
										<div class="price">
											<b>市场价：<i>${this.res[i].price.price1}</i></b>
											<b>优惠价：<s>${this.res[i].price.price2}</s></b>
										</div>
										<div class="shop">
											<input type="number" min="1" class="num" value="0"/>
											<input type="submit" value="立即购买" class="sub1"/>
											<input type="submit" value="加入购物车" class="sub2"/>
										</div>
									</div>
									<div class="deta-right">
										<dl>
											<dt>热卖推荐</dt>
											<dd>
												<img src="../images/details/2.jpg" />
												<p>￥123</p>
											</dd>
											<dd>
												<img src="../images/details/1.jpg" />
												<p>￥345</p>
											</dd>
											<dd>
												<img src="../images/details/3.jpg" />
												<p>￥456</p>
											</dd>
											<dd>
												<img src="../images/details/4.jpg" />
												<p>￥234</p>
											</dd>
											<dd>
												<img src="../images/details/5.jpg" />
												<p>￥987</p>
											</dd>
											<dd>
												<img src="../images/details/6.jpg" />
												<p>￥666</p>
											</dd>

										</dl>
									</div>
								`;
							}
						}
						this.spe.innerHTML=str;
						// this.change();
					}
				
				addEvent(){
					var that=this;
					this.spe.addEventListener("click",function(eve){
						if(eve.target.className=="sub2"){
							that.setCoo();
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
						setCookie("shop",JSON.stringify(this.shop));
				}
				
				bigArea(){
					var that=this;
					 this.big.onmouseenter = function() {
					            that.box.style.display = "block";
					            that.left2.style.display = "block";
					            var r = (that.left1.clientWidth-that.box.clientWidth-that.more.clientWidth)/(800-that.left2.clientWidth);
					            document.onmousemove = function(e) {
					                var mouseX =  e.pageX;
					                var mouseY = e.pageY;
					                var elementX = offset(that.left1).left;
					                var elementY = offset(that.left1).top;
					                var resultX = mouseX - elementX - that.left1.clientLeft - that.box.clientWidth / 2;
					                var resultY = mouseY - elementY - that.left1.clientTop - that.box.clientHeight / 2;
					                if (resultX < 0) {
					                    resultX = 0;
					                } else if (resultX > that.left1.clientWidth - that.box.clientWidth) {
					                    resultX = that.left1.clientWidth - that.box.clientWidth;
					                }
					
					                if (resultY < 0) {
					                    resultY = 0;
					                } else if (resultY >that.left1.clientHeight - that.box.clientHeight-that.more.clientHeight) {
					                    resultY = that.left1.clientHeight - that.box.clientHeight-that.more.clientHeight;
					                }
					                that.box.style.left = resultX + "px";
					                that.box.style.top = resultY + "px";
					                that.left2.style.backgroundPositionX = -resultX / r + "px";
					                that.left2.style.backgroundPositionY = -resultY / r + "px";
					                
					            }
					        }
					        that.left1.onmouseleave = function() {
					            that.box.style.display = "none";
					            that.left2.style.display = "none";
					        }
					
					
					        function offset(dom) {
					            var obj = {
					                left: 0,
					                top: 0
					            }
					            obj.left = dom.offsetLeft;
					            obj.top = dom.offsetTop;
					            var isIE8 = window.navigator.userAgent.indexOf("MSIE 8") != -1;
					
					            var offsetParent = dom.offsetParent;
					            while (offsetParent != document.body) {
					                if (isIE8) {
					                    obj.left += offsetParent.offsetLeft;
					                    obj.top += offsetParent.offsetTop;
					                } else {
					                    obj.left += offsetParent.offsetLeft + offsetParent.clientLeft;
					                    obj.top += offsetParent.offsetTop + offsetParent.clientTop;
					                }
					                offsetParent = offsetParent.offsetParent;
					            }
					            return obj;
					        }
				}
				
				change(){
					var that=this;
					// console.log(this.res[1].img.img1);
					// console.log(this.imgs);
					// console.log(this.left2);
					// console.log(this.id);
					for(let i=0;i<this.imgs.length;i++){
						this.imgs[i].onclick=function(){
							that.big.src=that.imgs[i].src;
							var t=that.res[that.id-1].img.img1;
							console.log(that.id);
							console.log(that.res[that.id].img.img2);
								if(i==0){
									that.left2.style.background="url("+that.res[that.id-1].img.img1+") no-repeat";
								}else if(i==1){
									that.left2.style.background="url("+that.res[that.id-1].img.img2+") no-repeat";
								}else if(i==2){
									that.left2.style.background="url("+that.res[that.id-1].img.img3+") no-repeat";
								}
								
							
						}
						
					}
				}

					
	}	
				new List({
					url:"http://localhost/test1910/花市网/json/goods.json",
					spe:document.querySelector("#deta .spe")
				})
				

	var loadimgs=document.querySelectorAll("#flower .left img");
	var clientH=document.documentElement.clientHeight;
	var scrollT=document.documentElement.scrollTop;
	
	var arr=[];
	for(var i=0;i<loadimgs.length;i++){
		arr.push(loadimgs[i]);
	}
	function lazyLoad(elements,cH,sT){
		for(var i=0;i<arr.length;i++){
			if(arr[i].offsetTop<cH+sT){
				arr[i].src=arr[i].getAttribute("data-src");
				arr.splice(i,1);
				i--;
			}
		}
	}
	lazyLoad(loadimgs,clientH,scrollT);
	onscroll=function(){
		var scrollT=document.documentElement.scrollTop;
		lazyLoad(loadimgs,clientH,scrollT);
	}
