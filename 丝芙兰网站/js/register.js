(function(){
	var use=localStorage.use
	var arr = JSON.parse(use)
	console.log(arr)
	$('.inpt-one.enter').on('click',function(){ //判断输入密码账号是否正确
		var account_number=$('.inpt-one.n1 input').val();
		var passwords=$('.inpt-one.n2 input').val();
		console.log(account_number)
		var flag=true;
		$.each(arr,function(index,ele){ //判断是账号错误还是密码错误
			if(ele.name==account_number){
				flag=false;
				if(ele.value==passwords){
					alert('登录成功')
					locastage(account_number)
					location.href='home-page.html';
				}else{
					alert('密码错误')
				}
			}
		})
		if(flag){
			alert("账号错误")
		}
		
		
	})
	
	
//	console.log($('.inpt-one n1 input').val())
	
	function locastage(value){
		if(value!=''){
		var count=1
//		var keys=localStorage.keys
		var arr=[];
		var Cdata=new Object()
		
//		if(keys==null||keys==undefined||keys==""){
//			var data=[]
//			Cdata.name=value
//			Cdata.count=count
//			data.push(Cdata)
//			aa=JSON.stringify(data)
//		}else{
//			
//			var arr = JSON.parse(keys)
//			$.each(arr,function(index,ele){
//				console.log(ele)
//				if(value==ele.name){
//					count++
//					arr.splice(index,1)
//				}
//			})
		
			Cdata.name=value
			Cdata.count=count
			arr.push(Cdata)
			aa=JSON.stringify(arr)
		
					localStorage.keys=aa
					

		}
	}
}())
