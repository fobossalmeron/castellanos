//Maps
function initialize() {
  var locCastellanos  = new google.maps.LatLng(19.419696,-99.160785);
  var locCastellanosOptions = {
    zoom: 16,
    center: locCastellanos,
    scrollwheel: false
  };
  var mapCastellanos = new google.maps.Map(document.getElementById("map"), locCastellanosOptions);

  var locCastellanosMarker = new google.maps.Marker({
    position: locCastellanos,
    map: mapCastellanos,
    title:"Castellanosasociados",
    //icon: image
  });

//Define image y guarda en .png, widthxheight en medidas, origen el centro y anchor la punta que señala

//  var image = {
//      url: '/images/logo.svg',
//      size: new google.maps.Size(40,33),
//      origin: new google.maps.Point(0,0),
//      anchor: new google.maps.Point(0, 33)
//  };
};

google.maps.event.addDomListener(window, 'load', initialize);
