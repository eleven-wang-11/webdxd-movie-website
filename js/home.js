var posters = [
		{
			poster_url: "pic/movie-poster-0.jpg",
			name: "Avengers"
		},
		{
			poster_url: "pic/movie-poster-1.jpg",
			name: "Star Wars"
		},
		{
			poster_url: "pic/movie-poster-2.jpg",
			name: "Titanic"
		}
	];


	for (var i =0; i < posters.length; i++) {
		var currentDiv = $('<div>').appendTo('.posters');
		$('<img>').attr('src',posters[i].poster_url).appendTo(currentDiv);
		$('<h3>').text(posters[i].name).appendTo(currentDiv);
	}


var banners = [
{
	banner_url: "pic/banner-1.jpg",
	name: "The Avengers"
},
{
	banner_url: "pic/banner-1.jpg",
	name: "The Avengers"
},
{
	banner_url: "pic/banner-1.jpg",
	name: "The Avengers"
}
]

// for (var i = 0; i < banners.length; i++) {
// 	var currentList = $('<li>').attr({'data-target':"#movie-banner", 'data-slide-to':"0"}),
// 	.addClass('active').appendTo('.carousel-indicators');
// 	$('<li>')
// }
















