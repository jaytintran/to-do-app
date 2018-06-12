//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("done")
});


//Click X to Delete Todo
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		//Get New Todo From User
		var newTodo = $(this).val();
		$(this).val("");
		//Create New Todo and Add To UL
		$("ul").append("<li><span class='fa fa-trash'></span> " + newTodo + "</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
})