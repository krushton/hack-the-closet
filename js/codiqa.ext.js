$(document).ready(function(){

	$("#tag-btn").on("click",function(event){

		$.get("http://vwala.pythonanywhere.com/items/" + $('input[id=tag-num]').val(), function(data, textStatus, jqXHR){
			$("#item").removeClass("hidden");

			

		});

	});

})
