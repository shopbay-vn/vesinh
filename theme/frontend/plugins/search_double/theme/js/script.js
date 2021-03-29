$(document).ready(function() {
	if ($('.key').length > 0){
		$.ajaxSetup({
			data: {csrf_tech5s_name:$('meta[name="csrf-token"]').attr('content')}
		});
		var s = $('.key').attr('id');
		$.ajax({
			url: 'search_pro',
			type: 'POST',
			data: {s:s},
		})
		.done(function(data) {
			$('.list_pro').html(data);
		});
		$(document).on('click', '.list_pro .te-pagination a', function(event) {
			event.preventDefault();
			$.ajax({
				url: $(this).attr('href'),
				type: 'GET'
			})
			.done(function(data) {
				$('.list_pro').html(data);
				var hic = $('.list_pro').offset().top - 50;
				$('body,html').animate({ scrollTop: hic }, 800 );
			})
		});
		$.ajax({
			url: 'search_news',
			type: 'POST',
			data: {s:s},
		})
		.done(function(data) {
			$('.list_news').html(data);
		});
		$(document).on('click', '.list_news .te-pagination a', function(event) {
			event.preventDefault();
			$.ajax({
				url: $(this).attr('href'),
				type: 'GET'
			})
			.done(function(data) {
				$('.list_news').html(data);
				var hic = $('.list_news').offset().top - 50;
				$('body,html').animate({ scrollTop: hic }, 800 );
			})
		});
		}
});