
(function(){
//	公用头部
    $('#top').load('top.html',"传送数据",function(){})
//	公用尾部
	$('#public_tail').load('afterbody.html','shuju',function(){})
		
	
//加载数据	


shoppingdata()
function shoppingdata(){//购物页面数据加载
	var obj=localStorage
	var keys=localStorage.keys
		
		if(keys==null||keys==undefined||keys==""){
			alert('请登先登录')
			return;
		}
	var str = JSON.parse(keys)
	var ids=str[0].name
	var str = JSON.parse(keys)
	var ids=str[0].name
	var html='';
	var data=localStorage.getItem(ids)
	var user=JSON.parse(data)
	$.each(user,function(index,ele){
		html+=`<li pid="${ele[ids][0]}">
						<em></em>
						<ol class="list-title">
							<li class="imgs">
								<img src="${ele[ids][1]}"/>
							</li>
							<li class="info">
								<h5>${ele[ids][2]}</h5>
								<p>${ele[ids][3]}</p>
								<p>规格：套装</p>
							</li>
							<li class="unitPrice">
								<span id="">${ele[ids][4]}</span>
							</li>
							<li class="quantity">
								<div class="btn">
									<i>-</i>
									<span id="">1</span>
									<i>+</i>
								</div>
							</li>
							<li class="subtotal">
								<span id="">${ele[ids][4]}</span>
							</li>
							<li class="operation">
								<i class="delet"></i>
							</li>
						</ol>
					</li>`
		
	})
	
	
	
	
	
	
	
	
	
	
	
//	
//	var str='';
//	var count=0;
//	for( var pop in obj){
//			if(Object.prototype.hasOwnProperty.call(obj,pop)){
//					if(pop!='use'&&pop!='keys'){
//					
//					var c=localStorage.getItem(pop)
//					var ele=JSON.parse(c)
//					console.log(ele)
//					str+=`<li pid="${pop}">
//						<em></em>
//						<ol class="list-title">
//							<li class="imgs">
//								<img src="${ele[3]}"/>
//							</li>
//							<li class="info">
//								<h5>${ele[9]}</h5>
//								<p>${ele[1]}</p>
//								<p>规格：套装</p>
//							</li>
//							<li class="unitPrice">
//								<span id="">${ele[6]}</span>
//							</li>
//							<li class="quantity">
//								<div class="btn">
//									<i>-</i>
//									<span id="">1</span>
//									<i>+</i>
//								</div>
//							</li>
//							<li class="subtotal">
//								<span id="">${ele[6]}</span>
//							</li>
//							<li class="operation">
//								<i class="delet"></i>
//							</li>
//						</ol>
//					</li>`
//				}	
//				
//			}
//		}
	$('.shopping_list').append(html);
	delet()
	}
	

function delet(){//点击删除
	$('.delet').on('click',function(){
		var par=$(this).parent().parent().parent()
		var pid=par.attr('pid')
		
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
				remove(index);
				return false;
			}
		})
		
	})
	
	function remove(index){
		console.log(user)
		if(user){
			var newuser=user.splice(index,1);
		var userstr=JSON.stringify(user)
		localStorage.setItem(ids,userstr)
		}
		
		
	}
		$(par).remove()
	})
}

}())
	
