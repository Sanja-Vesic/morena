function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(23.042359, -109.705621), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}