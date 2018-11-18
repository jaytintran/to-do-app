// Check Todo On / Off
$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
});

// Click X to Delete Todo
$('ul').on('click', 'span', function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add New Todos
$("input[type='text']").on('keypress', function (event) {
	if (event.which === 13) {
		// Get Todo Content
		var todo = $(this).val();
		// Empty Todo When User Hits Enter
		$(this).val('');
		// Create a New Li and Add It to Ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todo + '</li>');
	}
});

// Click Plush to Add Todo
$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
})