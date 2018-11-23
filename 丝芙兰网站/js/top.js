(function(){
	init()
	function init(){
		loca()
		
	}
function loca(){//页面跳转
		$('.nav-info.uls li').click(function(){
			location.href='sephora01.html'
		})
}
shopping_bag()
function shopping_bag(){//购物袋计件
//	var obj=localStorage
	var keys=localStorage.keys
	
	if(keys){
		console.log('a')
		var str = JSON.parse(keys)
		var ids=str[0].name
		var str = JSON.parse(keys)
		var ids=str[0].name
		var html='';
		var data=localStorage.getItem(ids)
		if(data){
			var user=JSON.parse(data)
		$('.search-box-right span').html(0||user.length)
		console.log(user)
		}
		
	}
	
}

	register()
function register(){  //接收登录的账号
	var keys=localStorage.keys
	if(keys){
		console.log('s')
		var arr = JSON.parse(keys)
	var reg=/(\d{3})(\d{4})(\d{4})/
	var ss=arr[0].name.replace(reg,'$1***$3')
	console.log(arr)
	$('#register').html(ss)
	}
}


}())
