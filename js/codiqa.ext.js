$(document).ready(function(){

	$("#tag-btn").on("click",function(event){
		var url = "http://vwala.pythonanywhere.com/items/" + $('input[id=tag-num]').val();
		console.log(url);

		$.get(url, function(data, textStatus, jqXHR){


		});
			$("#item").removeClass("hidden"); //move this up once .get is working
			$("#tag-btn").attr("data-theme", "c");
	});

})
