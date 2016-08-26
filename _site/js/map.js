function initMap() {
  var locCastellanos  = new google.maps.LatLng(19.372528, -99.175753);
  var locCastellanosOptions = {
    zoom: 16,
    center: locCastellanos,
    scrollwheel: false
  };
  var mapCastellanos = new google.maps.Map(document.getElementById("map"), locCastellanosOptions);
  var iconCastellanos = {
       url: '/img/marker.svg',
       size: new google.maps.Size(30,120),
       origin: new google.maps.Point(10,0),
       anchor: new google.maps.Point(10,75)
 };
  var locCastellanosMarker = new google.maps.Marker({
    position: locCastellanos,
    map: mapCastellanos,
    title: "Castellanos & Asociados",
    // animation: google.maps.Animation.DROP,
    icon: iconCastellanos
  });
  locCastellanosMarker.addListener('click', toggleBounce);
  function toggleBounce() {
    if (locCastellanosMarker.getAnimation() !== null) {
      locCastellanosMarker.setAnimation(null);
    } else {
      locCastellanosMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
