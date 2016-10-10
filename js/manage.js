;(function(){
	var i=0;
	$('.return .manage-btn').on('touchstart',function(){
		i++;
		if(i == 1){
			$(this).text("确定");
		}else if(i == 2){
			$(this).text("账户管理");
			i=0;
		}
		$('.manage .account-type .manage-link .icon-go').toggleClass('go-active');
		$('.manage .account-type .manage-link .operate').toggleClass('operate-active');
	})


})(jQuery);