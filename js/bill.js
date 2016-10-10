;(function(){
	//radio_on与radio_off的切换
	$('.remind-save .remind .remind-bg').on('touchstart',function(){
		$(this).toggleClass('remind-bg-1').toggleClass('remind-bg-2');
	})
	$('.remind-save .save .save-bg').on('touchstart',function(){
		$(this).toggleClass('save-bg-1').toggleClass('save-bg-2');
	})


	//确认支付点击
	$('.total .total-btn').on('touchstart',function(){
		$('.pay-default').show();
	});
	$('.pay-default .pay-group .cancel').on('touchstart',function(){
		$('.pay-default').hide();
	})
})(jQuery);