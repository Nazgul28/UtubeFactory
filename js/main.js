
$(function () {

  console.log('hi');
  
  $('#utube-search').submit(function(event){
   event.preventDefault();


   console.log('hi there');


   var artist = $('#utube-name').val();
   var results = {};
   var newLine = '';
$.ajax({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search', 
		data: { 
			part : 'contentDetails',
			forUsername: 'channelName',
			key: 'AIzaSyBw9-Bc4ManXYbSKxaYgbHtgYC8mRtW-sg'
		},
			dataType: 'jsonp'
	})

   .done(function(results){
            // var result = results.data;
            console.log(results);

            $(results.results).each(function(index,value) {
              console.log(value, results);

          });  

        });
});
})











	