$(document).ready(function(){
	console.log('doc ok');

$('#tweet-search').submit(function(){

	var search_term = {
		q: "buceta"
	};
	search(search_term);

});

});



	function search(search_term) {
		console.log('searching ...');
		console.dir(search_term);

		var search_term = '';
		var desireSearch = $ ('#tag').val();

		$.ajax({
			method: 'GET',
			url: 'http://search.twitter.com/search.json?' + desireSearch, 
			dataType: 'jsonp',
})
		.done(function(results){
            var result = results.data;
            console.log(result);

});

	}
	





		

