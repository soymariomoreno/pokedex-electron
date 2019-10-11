$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
})

//Eliminar un elemento de dato
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	event.stopPropagation()
})

//Agregar un nuevo elemento
$("#name").keypress(function(event){
	console.log(event);
	if(event.which === 13) {
		var todoText = $(this).val()
		console.log(todoText);
		if(todoText != ''){
			$(this).val("")
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		}
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})
