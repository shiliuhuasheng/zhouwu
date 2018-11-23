(function(){
//插入公用头部
$('header').load('top.html',"传送数据",function(){})
//插入公用尾部
$('#afterbody').load('afterbody.html','shuju',function(){})
$.ajax({			
		url:'https://recommender.predict.emarsys.cn/merchants/18BC49C88D345FEB/?pv=1237176248&xp=1&f=f%3APERSONAL_PC_HOME%2Cl%3A20%2Co%3A0&cp=1&vi=692A9140CCE0DC5B&p=981935%7C1538270237&prev_url=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3Dutf-8%26f%3D8%26rsv_bp%3D0%26rsv_idx%3D1%26tn%3Dbaidu%26wd%3D%25E4%25B8%259D%25E8%258A%2599%25E5%2585%25B0%26rsv_pq%3Dcf9857c3000609b4%26rsv_t%3D0004x2XNvuiRDNjKGMPZWT3Od1kPBJ%252BHuPCp%252FPnpAWtnZ9JvS8XhsCjhaXA%26rqlang%3Dcn%26rsv_enter%3D1%26rsv_sug3%3D3%26rsv_sug1%3D3%26rsv_sug7%3D100',
		type:'get',
		dataType:'jsonp',
		}).done(function(res){
			brand(res)
		})
function brand(res){ //猜你喜欢数据加载
	var likeArr=res.products
	var str='';
	$.each(likeArr,function(ele,index){
		str+='<li pid="'+ele+'">'
					+'<a href='+index[2]+'>'
						+'<img src="'+index[3]+'"/>'
						+'<p>'+index[11]+'</p>'
						+'<p>'+index[1]+'</p>'
						+'<p>￥'+index[6]+'</p>'
					+'</a>'
				+'</li>'
	})
	$('.like-info').html(str)
}


	$.ajax({    //ajax请求数据
			url:"../img/shuju.json",
			type:"get",
			dataType:"json"
		}).done(function(res){
//			register()
			brand_info(res.aa)
			recommend(res.Boutique)
			 sallBrand(res.slincare)
			makeup(res.makeup)
			fragrancr(res.fragrancr)
			tools(res.tools)
			manSkincare(res.manSkincare)
			bodyCare(res.bodyCare)
			hairCare(res.hairCare)
			slideshow(res.slideshow)
			min_slideshow(res.min_slideshow)
			roll()
			allGood(res.allGood)
			catalogue(res.catalogue)
			all_commodities()
			bind_all()
			
			
		})

function slideshow(img){//轮播图数据加载
	var str='';
	var lis='';
	var width=parseInt($('.lis').width()/(img.length)-10)
	
	$.each(img,function(index,ele){
		str+='<a><img src="'+ele+'"/></a>'
		lis+='<li></li>'		
	})
	$('.slideshow').get(0).innerHTML+=str
	$('.lis').html(lis)
	$('.lis li').width(width)
	}

function min_slideshow(img){//小轮播图部分数据加载
	var str='';
	$.each(img,function(index,ele){
		str+=`<a><img src="${ele}"/></a>`
	})
	$('.brand-centent-left').html(str)
}

		
function brand_info(obj){//全部品牌商标加载
		var str='';
		$.each(obj,function(i,n){
			str+='<li>'
					+'<a><img src="'+n.img+'"/></a>'
					+'<div class="sifulan">'
						+'<a class="sifulan-name">'+n.name+'</a>'
						+'<a class="sifulan-click">点击查看</a>'
					+'</div>'
				+'</li>'
		})
		$('.brand-info').html(str)
		}

function recommend(obj){//精品推荐部分数据加载
	console.log(obj)
	var str='';
	$.each(obj,function(index,ele) {
		str+='<li>'
					+'<img src="'+ele.bgimg+'"/>'
					+'<ul class="recommend-info-right">'
						+'<a>'
							+'<li>'
								+'<p>'+ele.name+'</p>'
								+'<p>'+ele.info+'</p>'
								+'<p>￥'+ele.pic+'</p>'
								+'<img src="'+ele.url+'"/>'
							+'</li>'
						+'</a>'
						+'<a>'
							+'<li>'
								+'<p>'+ele.name2+'</p>'
								+'<p>'+ele.info2+'</p>'
								+'<p>￥'+ele.pic2+'</p>'
								+'<img src="'+ele.url2+'"/>'
							+'</li>'
						+'</a>'
					+'</ul>'
				+'</li>'
	});
	$('.recommend-info').get(0).innerHTML+=str
}

function sallBrand(arr){//护肤品类数据加载
	$('.skincare-info.skin').html(dataLoading(arr))
}

function makeup(arr){//彩妆品类数据加载
	$('.skincare-info.makeup').html(dataLoading(arr))
}
function fragrancr(arr){
	$('.skincare-info.fragrancr').html(dataLoading(arr))
}

function tools(arr){//工具类数据加载
	$('.skincare-info.tools').html(dataLoading(arr))
}

function manSkincare(arr){//男士护肤品类数据加载
	$('.skincare-info.manSkincare').html(dataLoading(arr))
}

function bodyCare(arr){//洗浴护体类数据加载
	$('.skincare-info.bodyCare').html(dataLoading(arr))
}

function hairCare(arr){//美发护肤品类数据加载
	$('.skincare-info.hairCare').html(dataLoading(arr))
}

function dataLoading(arr){//数据加载函数
	var str='';
	$.each(arr, function(index,ele) {
		str+='<li>'
				+'<a>'
					+'<div>'+ele.name+'</div>'
					+'<div>'+ele.info+'</div>'	
					+'<div>￥'+ele.pic+'</div>'
					+'<img src="'+ele.url+'"/>'
				+'</a>'
			+'</li>'
			
	});
	return str
}


function roll(){//轮播图效果js
	var c=0,
		time=null;
	time=setInterval(show,1500)	
	function show(){		
		$('.slideshow a img').eq(c).fadeIn(200).parent().siblings().find('img').fadeOut(200)
		$('.lis li').eq(c).css({'background':'rgba(255,255,255,1)'}).siblings('li').css({'background':'rgba(255,255,255,0.5)'})
		c++;
		c=c>$('.slideshow img').length-1?c=0:c;	
	}
	
	$('.slideshow').hover(function(){
		clearInterval(time)
	},function(){
		time=setInterval(show,1500)	
	})
	$('.btn-left').on('click',function(){
		c--
		c = c==0?c=$('.slideshow img').length-1:c;	
		$('.slideshow a img').eq(c).fadeIn(200).parent().siblings().find('img').fadeOut(200)
		
	})
	$('.btn-right').on('click',function(){
		c++
		c = c==$('.slideshow img').length-1?c=0:c;	
		$('.slideshow a img').eq(c).fadeIn(200).parent().siblings().find('img').fadeOut(200)
	})
	$('.lis li').on('click',function(){
		var c=$(this).index()
		$('.slideshow a img').eq(c).fadeIn(200).parent().siblings().find('img').fadeOut(200)
		$('.lis li').eq(c).css({'background':'rgba(255,255,255,1)'}).siblings('li').css({'background':'rgba(255,255,255,0.5)'})
	})	
	

   brand_centent_left()
	function brand_centent_left(){//	小轮播图js
		var c=0,
			time=null;
		time=setInterval(min_show,1500)
		function min_show(){
			c++;
			c= c >1?c=0:c
			
			$('.brand-centent-left img').eq(c).fadeIn(200).parent().siblings().find('img').fadeOut(200)
		}
	}
}

function allGood(arr){//全部商品类目数据加载	
	var str='';
	$.each(arr,function(index,ele){
		str+='<li>'
				+'<a>'+ele[0]+'</a>'
				+'<ul class="uls">'
					+'<li><a>'+ele[1]+'</a></li>'
					+'<li><a>'+ele[2]+'</a></li>'
					+'<li><a>'+ele[3]+'</a></li>'
				+'</ul>'
			+'</li>'
	})
	$('.catalogue').html(str)
}
	


function catalogue(arr){//热门隐藏部分js
	$('.catalogue>li').hover(function(){
		$('.hot-conceal').css('display','block')
		var ind=$(this).index()
		var str='';
		var ele=arr[ind]
			str+=`<div class="hot-conceal-left">															
								<div class="hot-conceal-top">
									<h2>${ele[0][0]}</h4>
								</div>
								<ul class="hot-conceal-centen">
									<li>
										<a>
											<div class="hot-one ">
												<P>${ele[0][1]}</P>
												<ul class="hot-one-info">
													<li>${ele[0][2]}</li>
													<li>${ele[0][3]}</li>	
													<li>${ele[0][4]}</li>
													<li>${ele[0][5]}</li>
													<li>${ele[0][6]}</li>
													<li>${ele[0][7]}</li>
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
										<a>
											<div class="hot-one ">
												<P>${ele[1][0]}</P>
												<ul class="hot-one-info">
													<li>${ele[1][1]}</li>
													<li>${ele[1][2]}</li>	
													<li>${ele[1][3]}</li>
													
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
									</li>
									<li>
										<a>
											<div class="hot-one ">
												<P>${ele[2][0]}</P>
												<ul class="hot-one-info">
													<li>${ele[2][1]}</li>
													<li>${ele[2][2]}</li>	
													<li>${ele[2][3]}</li>
													<li>${ele[2][4]}</li>
													
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
										<a>
											<div class="hot-one ">
												<P>${ele[3][0]}</P>
												<ul class="hot-one-info">
													<li>${ele[3][1]}</li>
													
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
									</li>
									<li>
										<a>
											<div class="hot-one ">
												<P>${ele[4][0]}</P>
												<ul class="hot-one-info">
													<li>${ele[4][1]}</li>
													<li>${ele[4][2]}</li>	
													<li>${ele[4][3]}</li>
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
										<a>
											<div class="hot-one ">
												<P>${ele[5][0]}</P>
												<ul class="hot-one-info">
													<li>${ele[5][1]}</li>
													<li>${ele[5][2]}</li>	
													<li>${ele[5][3]}</li>
												</ul>	
											</div>
											<div style="clear: both;"></div>
										</a>
									</li>
								</ul>
								<ul class="hot-conceal-bottom">
									<li><a><img src="${ele[6].img}"/></a></li>
									<li><a><img src="${ele[7].img}"/></a></li>
									<li><a><img src="${ele[8].img}"/></a></li>
									<li><a><img src="${ele[9].img}"/></a></li>
								</ul>
							</div>
							<div class="hot-conceal-img">
								<a><img src="${ele[10].bgimg}"/></a>
							</div>`
		$('.hot-conceal').html(str)
	},function(){
		$('.hot-conceal').css('display','none')
	})
	$('.hot-conceal').hover(function(){
		$(this).css('display','block')
	},function(){
		$(this).css('display','none')
	})
};


fixed()
function fixed(){//固定头部导航栏部分js
	var aa=$('.skincare').offset().top
	$(document).scroll(function(){
		var top = $(document).scrollTop()
		if(top>=600){
			$('.search-box.ycbox').slideDown(300);
			$('.flexd-right').show();
			
		}else if(top<600){
			$('.search-box.ycbox').slideUp(300);
			$('.flexd-right').hide();
		}
		if(top>=1200){
			$('.flexd-left').fadeIn(100)
		}else{
			$('.flexd-left').fadeOut(100)
		}
	})
			$('.flexd-left-info li').click(function(){
			var top=aa+$(this).index()*($('.skincare').height()+$('.brand').height()+70)
			
			$('html,body').animate({
				scrollTop:top
			},500,function(){
			})
		})
			$('.flexd-stick>li:last-child').click(function(){
				$('html,body').animate({
				scrollTop:0
			},500)
			})
};

function all_commodities(){//全部商品类点击跳转事件
	
	$('.catalogue li').on('click',function(){
		location.href='sephora01.html'
	})
}

function bind_all(){//所有商品绑定点击跳转事件
	$('.skincare-info').on('click',function(){
		location.href='sephora01.html'
	})
};

//function register(){  //接收登录的账号
//	var keys=localStorage.keys
//	if(keys!=''){
//		var arr = JSON.parse(keys)
//	var reg=/(\d{3})(\d{4})(\d{4})/
//	var ss=arr[0].name.replace(reg,'$1***$3')
//	console.log(arr)
//	$('#register').html(ss)
//	}
//	
//	
//}





}())