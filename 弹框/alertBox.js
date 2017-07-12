
var ALERTBOX = {
	alertBox:function(para){

		var DEFAULT={
			dom:'body',
			title:"",
			content:"",
			time:3000,
			type:'tip',
			width:"50%",
		};
		// 
		var para = $.extend({},DEFAULT,para);


		var dom = $(para.dom);
		var width = para.width;
		var title = para.title;
		var content = para.content;
		var time = para.time;
		var type = para.type;

		var box = $('<div></div>');
		var mask = $('<div></div>');
		mask.addClass('mask');
		mask.css({
			position:"fixed",
			top:0,
			right:0,
			bottom:0,
			left:0,
			backgroundColor:"#000",
			opacity:0.3,
			zIndex:1
		});
		$('body').append(mask);
		box.css({
			width:width,
			padding:"20px",
			position:"absolute",
			left:"50%",
			transform:"translate(-50%,-50%)",
			top:"50%",
			color:"#fff",
			lineHeight:"24px",
			zIndex:2	
		});

		switch(type){
			case "success":box.css({
				backgroundColor:"#0a9a14"
			})
			break;
			case "tip":box.css({
				backgroundColor:"#bacdd7"
			}); 
			setTimeout(function(){ALERTBOX.closeBox(dom)},time);
			break;
			case "failed":box.css({
				backgroundColor:"#b5063b"
			})
			break;
			default:box.css({
				backgroundColor:"#1d73a3"
			});

		};
		box.addClass('alert-box');
		dom.append(box);

		// 创建标题
		var titleBox = $('<h3>'+ title +'</h3>');
		titleBox.css({
			textAlign:"center"
		});

		// 创建弹框内容
		var contentBox = $('<span>'+ content +'</span>');

		// 创建关闭按钮
		var closeBox = $('<div>X</div>');
		closeBox.css({
			width:"20px",
			height:"20px",
			fontSize:"20px",
			lineHeight:"20px",
			textAlign:"center",
			position:"absolute",
			right:0,
			top:0,
			cursor:"pointer"
		});
		
		// 将标题 弹框内容 和 关闭按钮 加入 box 内
		box.append(titleBox,contentBox,closeBox);

		// 关闭按钮
		closeBox.on('click',function(){
			// console.log(dom);
			ALERTBOX.closeBox(dom);
		});
	},
	closeBox:function(dom,time){
		dom.children('.alert-box').stop().animate({
			height:0,
			opacity:0
		},200,function(){
			this.remove();
		});
		$('.mask').remove();
	}
}


