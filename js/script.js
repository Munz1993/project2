 function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
