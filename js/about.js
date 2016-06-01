var people = [
	{
		photo_url: "pic/a01.png",
		name: "Bob"
	},
	{
		photo_url: "pic/a02.png",
		name: "John"
	},
	{
		photo_url: "pic/a03.png",
		name: "Tracy"
	},
	{
		photo_url: "pic/a04.png",
		name: "Alan"
	},
	{
		photo_url: "pic/a05.png",
		name: "Neo"
	}
	];

	
	for (var i = 0; i < people.length; i++) {
		var currentDiv = $('<div>').addClass('col-lg-3 col-md-4 col-sm-6 col-xs-12')
		.appendTo('#about-content');

		$('<img>').attr('src', people[i].photo_url).addClass('full-width')
		.appendTo(currentDiv);
		$('<p>').addClass('member-name center').text(people[i].name)
		.appendTo(currentDiv);
	
	}