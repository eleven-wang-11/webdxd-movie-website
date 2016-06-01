var myAppRef = new Firebase("https://shining-heat-8633.firebaseio.com/");
var movieRef = new Firebase("https://shining-heat-8633.firebaseio.com/movieList");
var userRef = new Firebase("https://shining-heat-8633.firebaseio.com/users")
// movieRef.push({
//   name: "Dead Pool",
//   date: "2016/05/01",
//   price: 10,
//   ticketLeft: 21,
//   id: "m3"
// });

// myAppRef.set({movies: movieList});


myAppRef.child("movieList").on("value",function(snapshot) {
	var movieList = snapshot.val();
	console.log(movieList);

	$('.data-row').remove();

	for (var key in movieList) {

	var currentTr = $('<tr>').addClass('data-row')
	.attr('id', movieList[key].id).appendTo('#ticket-table');
    $('<td>').addClass('movie-name').text(movieList[key].name)
    .appendTo(currentTr);
    $('<td>').text('$' + movieList[key].price)
    .appendTo(currentTr);
    $('<td>').text(movieList[key].date)
    .appendTo(currentTr);
    $('<td>').text(movieList[key].ticketLeft).appendTo(currentTr);
    $('<td>').html('<button class="primary-btn btn-buy" data-toggle="modal" data-target="#buy-ticket-modal">Buy Ticket</button>').appendTo(currentTr);
	}

});

userRef.on("value",function(snapshot) {
	var userList = snapshot.val();
	console.log(userList);

	for (var key in userList) {
		var currentTr = $('<tr>').appendTo('#users');
		$('<td>').text(userList[key].first_name).appendTo(currentTr);
		$('<td>').text(userList[key].last_name).appendTo(currentTr);
		$('<td>').text(userList[key].phone).appendTo(currentTr);
		$('<td>').text(userList[key].movie_id).appendTo(currentTr);
	}
});



var buttonClicked;

$('.hcenter').on('click', '.btn-buy', function(event){
	$('input').removeClass("input-invalid");
	$('.text-danger').remove();
	buttonClicked = event.target;
	var movieRow = $(buttonClicked).parent().parent();
  var movieName = movieRow.find('.movie-name').text();
  $('#movie_id').val(movieRow.attr('id'));
  $('#buy-ticket-modal .modal-header').html('<h5>Buy ' + movieName + ' Ticket</h5>');

	
});


function chechInvalid(user, attribute) {

	if (user[attribute] == "") {
		$('#' + attribute).addClass("input-invalid").after('<p class="text-danger">Please complete '
			+ attribute + ' field</p>');
		return true;
	} else {
		return false;
	}
};


$('#buy-ticket-btn').click(function(event) {
	$('.text-danger').remove();
	$('input').removeClass("input-invalid");

	var user = {
		first_name: $('#first_name').val(),
		last_name: $('#last_name').val(),
		phone: $('#phone').val(),
		movie_id: $('#movie_id').val(),
	};
	console.log(user);
	userRef.push(user);

     
	$('input').removeClass("input-invalid");

	$('.text-danger').remove();
	// debugger;
	if (chechInvalid(user, 'first_name')) {
		return;
	}
	
	if (chechInvalid(user, 'last_name')) {
		return;
	}
	
	if (chechInvalid(user, 'phone')) {
		return;
	}

	var newTicketLeft = $(buttonClicked).parent().prev().
	text() - 1;


	if (newTicketLeft >= 0) {
		$(buttonClicked).parent().prev().text(newTicketLeft);
		if (newTicketLeft == 0) {
			$(buttonClicked).text("SOLD OUT").prop('disabled', 'disabled')
			.addClass('btn-disabled').removeClass('primary-button btn-buy');
		}
	}

	$('#buy-ticket-modal').modal('hide');

 	$('input[type="text"]').val("");

})


$('#submit-movie').click(function(){
  var movie = {
    name: $('#movie-name').val(),
    price: $('#price').val(),
    date: $('#date').val(),
    ticketLeft: $('#ticket-left').val()
  }
  movieRef.push(movie);
  $('#movie-name, #price, #date, #ticket-left').val("");
}); 






















