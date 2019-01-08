jQuery(function() {
	left_focus(null,"#infocus_btnleft","#infocus_btnright","#infocus_pic",1,1000,5000,1);
	$(".infocus").hover(function(){
		$("#infocus_btnleft").show();
		$("#infocus_btnright").show();
	},function(){
		$("#infocus_btnleft").hide();
		$("#infocus_btnright").hide();
	})
})

	function focus(box){
		var len  = jQuery(box+" .focus_pic li").length;
		var index = 0;
		var timer;
		jQuery(box+" .focus_btn span").hover(function(){
			if(index != jQuery(box+" .focus_btn span").index(this)){
				index = jQuery(box+" .focus_btn span").index(this);
				show(index,box);
			}
		})

		jQuery(box+" .focus_l").click(function(){
			index--;
			if(index==-1){index=len-1;}
			show(index,box);
		})
		jQuery(box+" .focus_r").click(function(){
			index++;
			if(index==len){index=0;}
			show(index,box);
		})

		//经过暂停自动播放
		jQuery(box).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
			index++;
			if(index==len){index=0;}
			show(index,box)
			 } , 5000);
		}).trigger("mouseleave");


		function show(index,box){
			jQuery(box+" .focus_pic li").stop(false,true).fadeOut();
			jQuery(box+" .focus_pic li").eq(index).stop(false,true).fadeIn();
			jQuery(box+" .focus_about li").stop(false,true).fadeOut();
			jQuery(box+" .focus_about li").eq(index).stop(false,true).fadeIn();
			jQuery(box+" .focus_btn span").removeClass("on").eq(index).addClass("on");
		}
	}



function top_focus(btn,left_btn,right_btn,con_box,num,con_height,speed,play){
		var len = Math.ceil(jQuery(con_box+" li").length/num);
		con_height = con_height*num;
		var index = 0;
		var timer;
		jQuery(btn+" span").hover(function(){
			if(index != jQuery(btn+" span").index(this)){
				index = jQuery(btn+" span").index(this);
				top_show(btn,index,con_box,con_height);
			}
		})

		jQuery(left_btn).click(function(){
			index--;
			if(index==-1){index=len-1;}
			top_show(btn,index,con_box,con_height);
		})

		jQuery(right_btn).click(function(){
			index++;
			if(index==len){index=0;}
			top_show(btn,index,con_box,con_height);
		})

if(play==1){
		//经过暂停自动播放
		jQuery(con_box).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
			index++;
			if(index==len){index=0;}
			top_show(btn,index,con_box,con_height)
			 } , speed);
		}).trigger("mouseleave");
}
		function top_show(btn,index,con_box,con_height){
			jQuery(con_box+" ul").stop(false,true).animate({"marginTop":-index*con_height},300);
			jQuery(btn+" span").removeClass("on").eq(index).addClass("on");
		}
}

function left_focus(btn,left_btn,right_btn,con_box,num,con_width,speed,play){
		var len = Math.ceil(jQuery(con_box+" li").length/num);
		con_width = con_width*num;
		var index = 0;
		var timer;
		jQuery(btn+" span").hover(function(){
			if(index != jQuery(btn+" span").index(this)){
				index = jQuery(btn+" span").index(this);
				top_show(btn,index,con_box,con_width);
			}
		})
		jQuery(left_btn).click(function(){
			this.blur();
			index--;
			if(index==-1){index=len-1;}
			top_show(btn,index,con_box,con_width);
		})

		jQuery(right_btn).click(function(){
			this.blur();
			index++;
			if(index==len){index=0;}
			top_show(btn,index,con_box,con_width);
		})

if(play==1){
		//经过暂停自动播放
		jQuery(con_box).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
			index++;
			if(index==len){index=0;}
			top_show(btn,index,con_box,con_width)
			 } , speed);
		}).trigger("mouseleave");
}
		function top_show(btn,index,con_box,con_width){
			jQuery(con_box+" ul").stop(false,true).animate({"marginLeft":-index*con_width},500);
			jQuery(btn+" span").removeClass("on").eq(index).addClass("on");
		}
}