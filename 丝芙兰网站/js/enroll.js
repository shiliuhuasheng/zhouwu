(function(){
//	公用尾部
		$('#afterbody').load('afterbody.html','shuju',function(){})

var val='';
	


	var cav =document.getElementsByClassName('auth_code')[0]
	var arr=[1,2,3,4,5,6,7,8,9]
	var str='';
	canvas(cav,arr,4,function(res){
		val=res
	})




// car--画板
    // arr--数组
    // num--随机数的个数
    // fn--函数返回的随机数
    function canvas(cav,arr,num,fn){
        var num=num;
        var str='';
        var ctx = cav.getContext('2d')
        ctx.clearRect(0,0,cav.width,cav.height)
        ctx.fillStyle="#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
        ctx.rect(0,0,cav.width,cav.height)
        ctx.fill();
        ctx.closePath()
        ctx.beginPath()
        for(var i = 0;i<num;i++){
        var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16)
        var f=Math.random()*20+20;
        var w=cav.width/num
        var h=cav.height-f
        var x=Math.random()*w;
        var y=Math.random()*f+h ;
        var ran=random()
        ctx.font=f+'px 黑体';
        ctx.fillStyle=color;
        str+=arr[ran]
        y= y<f?y=f:y;
        y= y>cav.height?y=cav.height:y
        var s=i*w+x
        s= s>cav.width-f/2?s=cav.width-f/2:s
        ctx.fillText(arr[ran],s,y)
         ctx.closePath()
    }
        function random(){
        return Math.floor(Math.random()*arr.length)
    }
    return fn(str)
    }

	

$('.auth_code').on('click',function(){
	canvas(cav,arr,4,function(res){
		val=res
	})	
	})


register()
function register(){//验证注册
	var div=document.getElementsByClassName('main-enroll')[0];
	var inpt=div.getElementsByTagName('input')
		
	var reg=[val,/^[1]\d{10}$/g,/^\d{6}/,/^\w{6,}$/,inpt[3].value];
	
//	if(use=='undfined'){
//		localStorage.setItem('use',[])
//	}
	function Tex(dom,reg){//	构造函数
		this.dom=dom;
		this.reg=reg;
		this.way=function(){
			var that=this
			this.dom.onblur=function(){
				
				if(that.reg.test(that.dom.value)){//正则判断
					
					var flag=true;
					var use=localStorage.use
					
//					if(use!=''){
//						var arr = JSON.parse(use)
//						$.each(arr,function(index,ele){
//							if(ele.name==that.dom.value){
//								flag=false;
//							}
//						})
//					}
					console.log(flag)
					if(flag){
//						this.onblur=null;
						this.nextElementSibling.innerHTML='√';
						this.nextElementSibling.className='correct';
					}else{
						alert('账号已存在')
					}
					return;
				}else{
					console.log('cuo')
					this.nextElementSibling.innerHTML='&times';
					this.nextElementSibling.className='error';
				}
			}
		};
		this.fairly=function(){//判断相等的方法
			var tha=this
			this.dom.onblur=function(){
				console.log(val)

				if(tha.dom.value==val){
					$('.auth_code').hide()
					this.nextElementSibling.innerHTML='√';
					this.nextElementSibling.className='correct';
				}else{
					$('.auth_code').show()
					this.nextElementSibling.innerHTML='&times'
					this.nextElementSibling.className='error'
				}
			}
		}
	}

//	给每个输入框绑定聚焦事件.
	var tex=new Tex(inpt[1],reg[1])
	var inpt1=new Tex(inpt[0],val)
	var inpt3=new Tex(inpt[2],reg[2])
	var inpt4=new Tex(inpt[3],reg[3])
	tex.way()
	inpt1.fairly()
	inpt3.way()
	inpt4.way()

	inpt[4].onblur=function(){//给最后一个绑定聚焦事件
		console.log('s')
		if(inpt[3].value!=''){
				if(this.value==inpt[3].value){
					$('.auth_code').hide()
					console.log('a')
					this.nextElementSibling.innerHTML='√'
					this.nextElementSibling.className='correct'	
					opinion()
				}else{
					$('.auth_code').show()
					this.nextElementSibling.innerHTML='×'
					this.nextElementSibling.className='error'
					console.log(val)
					
				}
		}
	}

	function opinion(){//判断所有输入框是否都正确
		var flag=true;

		$('.main-enroll span').each(function(index,ele){//循环判断
			console.log(ele.innerHTML)
			if(ele.innerHTML=='×'){
				flag=false;
				return false;
			}
		})
		
		if(flag){
			var count=1
			$('.articles').css({'background':'red'})
	
			$('.articles').on('click',function(){//给注册按钮绑定点击事件
				if(count==1){
					$(this).find('a').html('注册')
					count++
				}else{
					var use=localStorage.use
					var Cdata=new Object()
					var aa=null;
					if(use==null||use==undefined||use==""){
						var data=[]
						Cdata.name=inpt[1].value
						Cdata.value=inpt[4].value
						data.push(Cdata)
						aa=JSON.stringify(data)
					}else{
						var arr = JSON.parse(use)
						Cdata.name=inpt[1].value
						Cdata.value=inpt[4].value
						arr.push(Cdata)
						aa=JSON.stringify(arr)
					}
					localStorage.use=aa
						location.href='register.html'
				}
			})
		}
	}
	
	
	
	
	
	
}
		
		
}())
