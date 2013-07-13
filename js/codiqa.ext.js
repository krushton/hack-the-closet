$(document).ready(function(){

	$("#tag-btn").on("click",function(event){
		var url = "http://vwala.pythonanywhere.com/items/" + $('input[id=tag-num]').val();
		console.log(url);

		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(data) {
				console.log(data);

				$("#item").removeClass("hidden"); //move this up once .get is working
			}
		})
	});

	$("#submit-id").on("click", function(event){
		$.mobile.changePage("#page2");

	});

})
