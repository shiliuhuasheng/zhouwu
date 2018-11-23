(function(){
//	公用头部
	$("#header").load('top.html',"传送数据",function(){})
//	公用尾部
	$('#afterbody').load('afterbody.html','shuju',function(){})
	

magnifying()
function  magnifying(){//放大镜部分
	$('.max_img').mouseenter(function(e){
		var e=e||window.event
		var x=$(this).offset().left
		var y=$(this).offset().top
		console.log($('.max_img').offset().top)
		$('.magnify_img').show()
		$('.move-box').show()
		$(document).mousemove(function(e){
			var e=e||window.event
			var top=e.pageY-y-$('.move-box').height()/2;
			var left=e.pageX-x-$('.move-box').width()/2;
			top = top<=0?top=0:top;
			top = top>$('.max_img').height()-100?top=$('.max_img').height()-100:top
			left = left<=0?left=0:left;
			left = left>=$('.max_img').width()-100?left=$('.max_img').width()-100:left
			$('.move-box').css({'left':left+'px'})
			$('.move-box').css('top',top+'px')
			var maxX=parseInt($('.magnify_img img').width()/$('.max_img').width())
			var maxY=parseInt($('.magnify_img img').height()/$('.max_img').height())
			$('.magnify_img').scrollTop(top*maxY)
			$('.magnify_img').scrollLeft(left*maxX)
		})
	})
	$('.max_img').mouseleave(function(){
		$('.max_img').mouseenter(null)
		$(document).mousemove(null)
		$('.magnify_img').hide()
		$('.move-box').hide()
	})
	$('.magnify_img').mouseenter(function(){
		$(this).hide()
	})
}
	

//$.ajax({   //加载请求	
//	url:'https://recommender.predict.emarsys.cn/merchants/18BC49C88D345FEB/?pv=1237176248&xp=1&f=f%3APERSONAL_PC_HOME%2Cl%3A20%2Co%3A0&cp=1&vi=692A9140CCE0DC5B&p=981935%7C1538270237&prev_url=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3Dutf-8%26f%3D8%26rsv_bp%3D0%26rsv_idx%3D1%26tn%3Dbaidu%26wd%3D%25E4%25B8%259D%25E8%258A%2599%25E5%2585%25B0%26rsv_pq%3Dcf9857c3000609b4%26rsv_t%3D0004x2XNvuiRDNjKGMPZWT3Od1kPBJ%252BHuPCp%252FPnpAWtnZ9JvS8XhsCjhaXA%26rqlang%3Dcn%26rsv_enter%3D1%26rsv_sug3%3D3%26rsv_sug1%3D3%26rsv_sug7%3D100',
//		type:'get',
//		dataType:'jsonp',	
//}).done(function(res){
//	console.log(res)
//	searc(res.products)
//	magnifying()
//	addShopping(res.products)
//})
searc()
function searc(){//购物页面数据加载
	var jios=localStorage.jios
	var obj=JSON.parse(jios)
	
	var sea=location.search
	var arr=sea.split('=')
	var str='';
	var str1='';
	var pic=''
	var ele=obj[arr[1]]
		console.log(ele)
		str+=`<div class="max_img">
						<div class="move-box"></div>
						<img src="${ele[1]}"/>
						<div class="magnify_img"><img src="${ele[1]}"/></div>
					</div>
					<div class="min_img">
						<div class="left"><</div>
						<ul class="pictrue">
							<li><img src="${ele[1]}"/></li>
						</ul>
						<div class="right">></div>
					</div>
				</div>`
	$('.ps_show').html(str)
				str1+=`<div class="name">
							<h2>${ele[2]}</h3>
							<p>${ele[3]}</p>
							<p>${ele[2]}</p>
							<img src=""/>
						</div>`
			$('.primary_area').html(str1)			
				pic+=`<span id="">价格</span>
						<p>￥<span>${ele[4]}</span></p>`
				$('.pic').html(pic)
				
	addShopping(obj)			
}

function addShopping(obj){//点击加入购物车	
	

	$('.add_shopping').on('click',function(){
		var keys=localStorage.keys
		console.log(obj)
		if(keys==null||keys==undefined||keys==""){
			alert('请登先登录')
			return;
		}
		
		
		var sea=location.search
		var arr=sea.split('=')
		 var objs=new Object()
		 var arrs=[]
		var str = JSON.parse(keys)
console.log(obj[arr[1]])
		var pid = localStorage.getItem(str[0].name)
		console.log(pid)
		if(pid==null||pid==undefined||pid==""){
			var arrs=[]
		}else{
			var arrs= JSON.parse(pid)
			console.log(arrs)
		}
		objs[str[0].name]=obj[arr[1]]
		arrs.push(objs)
		var ss=JSON.stringify(arrs)
		localStorage.setItem(str[0].name,ss)
		location.href='success-04.html'+sea
	})
}
	
}())
