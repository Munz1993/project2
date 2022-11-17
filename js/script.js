function initMap() {
  // The location of MTCC
  var mtcc = { lat: 41.835211513686694,lng: -87.62580689029369 }; 
  var mapOptions = {
    zoom: 19,
    center: mtcc,
	 mapTypeId: google.maps.MapTypeId.SATELLITE,
	 mapTypeControlOptions: {
		  position: google.maps.ControlPosition.TOP_LEFT
		}
  };
  // The map, centered at MTCC
  var map = new google.maps.Map(document.getElementById("map"), mapOptions); 
  
  // The marker, positioned at MTCC
  var marker = new google.maps.Marker({
    position: mtcc,
    map: map,
  });
}
google.maps.event.addDomListener(window, 'load', init);
