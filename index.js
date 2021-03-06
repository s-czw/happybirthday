$(document).ready(function() {
	var envelopeWrapper = $('#envelope-wrapper');
	var envelope = $('#envelope');
	var coupon = $('#coupon');
	var buttons = $('#buttons');
	var close = $('#close');
	var details = $('#details');
	var peopleExit = $('#people-exit');
	var people = $('#people');

	new Splide('.splide').mount();
	people.hide();

	envelope.click(function() {
		envelopeWrapper.addClass('no-click');
		openEnvelope();
		setTimeout(() => {
			openCouponr();
		}, 1700);
	});
	close.click(function() {
		envelopeWrapper.removeClass('no-click');
		closeCoupon();
		setTimeout(() => {
			closeEnvelope();
		}, 1000);
	});
	details.click(function() {
		people.show();
	});
	peopleExit.click(function() {
		people.hide();
	});
	
	function openEnvelope() {
		envelope.addClass('open')
			.removeClass('close');
	}
	function closeEnvelope() {
		envelope.addClass('close')
			.removeClass('open');
	}
	function openCouponr() {
		coupon.addClass('scale-in')
			.removeClass('scale-out');
		buttons.removeClass('hide-buttons');
		setTimeout(() => {
			envelopeWrapper.addClass('blur');
		}, 700);
	}
	function closeCoupon() {
		envelopeWrapper.removeClass('blur');
		coupon.addClass('scale-out')
			.removeClass('scale-in');
		buttons.addClass('hide-buttons');
	}
})