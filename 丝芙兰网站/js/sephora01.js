(function(){
//	公用头部
	$('#header').load('top.html',"",function(){})
//	公用底部
	$('#bottom').load('afterbody.html','',function(){})

	$.ajax({  //	数据请求
		url:'https://recommender.predict.emarsys.cn/merchants/18BC49C88D345FEB/?pv=1237176248&xp=1&f=f%3APERSONAL_PC_HOME%2Cl%3A20%2Co%3A0&cp=1&vi=692A9140CCE0DC5B&p=981935%7C1538270237&prev_url=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3Dutf-8%26f%3D8%26rsv_bp%3D0%26rsv_idx%3D1%26tn%3Dbaidu%26wd%3D%25E4%25B8%259D%25E8%258A%2599%25E5%2585%25B0%26rsv_pq%3Dcf9857c3000609b4%26rsv_t%3D0004x2XNvuiRDNjKGMPZWT3Od1kPBJ%252BHuPCp%252FPnpAWtnZ9JvS8XhsCjhaXA%26rqlang%3Dcn%26rsv_enter%3D1%26rsv_sug3%3D3%26rsv_sug1%3D3%26rsv_sug7%3D100',
		type:'get',
		dataType:'jsonp',
	}).done(function(res){
		console.log(res)
		synthesize(res.products)
		bind()
	})

function synthesize(arr){//	综合部分数据加载
	var str='';
	$.each(arr,function(index,ele){
		str+='<li pid='+ele[0]+'>'
				+'<a><img src="'+ele[3]+'"/></a>'
				+'<p>'+ele[11]+'</p>'
				+'<p><a>'+ele[1]+'</a></p>'
				+'<p>￥'+ele[6]+'</p>'
			+'</li>'
	})
	$('.commodity-info').html(str)
}

$.ajax({//请求数据
	type:"get",
	url:"../img/shuju.json",
	dataType:"json"
}).done(function(res){
	logo(res.aa)
	classify(res.classify)
})

function logo(arr){//商标加载
	var str='';
	for(var i = 0;i<arr.length-2;i++){
		str+='<li><a><img src="'+arr[i].img+'"/></a></li>'
	}
	$('.brand-center').html(str)
}
	
function classify(arr){//分类加载
	str='';
	$.each(arr,function(index,ele){
		str+='<li>'
			+'<div>'+ele[0]+'</div>'
			+'<ul>'
				+'<li><a>'+ele[1]+'</a></li>'
				+'<li><a>'+ele[2]+'</a></li>'
				+'<li><a>'+ele[3]+'</a></li>'
				+'<li><a>'+ele[4]+'</a></li>'
				+'<li><a>'+ele[5]+'</a></li>'
				+'<li><a>'+ele[6]+'</a></li>'
			+'</ul>'
			+'<p><a>+多选</a></p>	'
		+'</li>'
	})
	$('.classify-info').html(str)
}

	function bind(){//点击跳转页面
		$('.commodity-info li').click(function(){
			var objs=new Object()
			 var arrs=[]
			var pid=$(this).attr('pid')
			arrs.push(pid)
			arrs.push($(this).find('a').find('img').attr('src'))
			arrs.push($(this).find('p').html())
			arrs.push($(this).find('p').next().find('a').html())
			arrs.push($(this).find('p').next().next().html())
			objs[pid]=arrs
		
		var ss=JSON.stringify(objs)
		localStorage.setItem('jios',ss)
//			console.log(pic)
			location.href='shopping03.html?pid='+pid;
		
		})
	}
	
	
	
}())
