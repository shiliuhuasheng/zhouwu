(function(){
	//插入公用头部
	$('#header').load('top.html',"传送数据",function(){})
//插入公用尾部
	$('#afterbody').load('afterbody.html','shuju',function(){})
	
	
shoppingdata()
function shoppingdata(){//加载购物数据
	var sea=location.search
	var arr=sea.split('=')
	var pid=arr[1]
	
	var keys=localStorage.keys
		
		if(keys==null||keys==undefined||keys==""){
			alert('请登先登录')
			return;
		}
	var str = JSON.parse(keys)
	var ids=str[0].name
	console.log(ids)
	var data=localStorage.getItem(ids)
	var user=JSON.parse(data)
	$.each(user,function(index,ele){
		$.each(ele,function(i,n){
			if(pid==n[0]){
				jiazai(index)
			}
		})
		
	})
	

	function jiazai(index){
		
	
	var ele=user[index]

	var str='';
	
	str+=`<li pid=${ele[ids][0]}>
			<img src="${ele[ids][1]}"/>
			<div class="list_info">
					<p>${ele[ids][2]}</p>
					<p>${ele[ids][3]}</p>
					<p>规格: 套装数量:1</p>
					<p>价格￥${ele[ids][4]}</p>
			</div>
			<div class="btn">
				<button><a>查看商品详情</a></button>
				<button><a>去购物车结算</a></button>
			</div>
		</li>`
		$('.center').html(str)
	}



	$('.btn button:eq(1)').on('click',function(){//点击跳转购物车页面	
		location.href='account-05.html'+sea
	})

	
	
	
}
	
	
	
	
	
	
	
	
	}())


