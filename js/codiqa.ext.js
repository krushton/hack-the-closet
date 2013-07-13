$(document).ready(function(){

	$("#tag-btn").on("click",function(event){
		var url = "http://vwala.pythonanywhere.com/items/" + $('input[id=tag-num]').val();
		console.log(url);

		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(data) {
				console.lot(data);
			}
		})

			$("#item").removeClass("hidden"); //move this up once .get is working
			$("#tag-btn").attr("data-theme", "c");
	});

	$("#submit-id").on("click", function(event){
		$.mobile.changePage("#page2");

	});

})
