$(document).ready(function($) {
	// 邮箱
	$('.email input').focus(function(){
		$('.email').addClass('focus');
	})
	$('.email input').focusout(function(){
		$('.email').removeClass('focus');
	})
	// 密码
	$('.paswd input').focus(function(){
		$('.paswd').addClass('focus');
	})
	$('.paswd input').focusout(function(){
		$('.paswd').removeClass('focus');
	})
});

$(document).ready(function($) {
	$('.menu_btn').click(function(){
		if($('.content').hasClass('hide')){
			$('.content').removeClass('hide')
			$('.feed_menu').removeClass('show')
		}else{
			$('.content').addClass('hide')
			$('.feed_menu').addClass('show')
		}
	})
});

$(document).ready(function($) {
	$('.nav li').click(function(){
		$(this).addClass('act').siblings('').removeClass('act')
	})
});

$(document).ready(function($) {
	$('.nav_item li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
});

