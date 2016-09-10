function initMap() {
  var locCastellanos  = new google.maps.LatLng(19.372528, -99.175753);
  var locCastellanosOptions = {
    zoom: 16,
    center: locCastellanos,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
    scrollwheel: false
  };

  var mapCastellanos = new google.maps.Map(document.getElementById("map"), locCastellanosOptions);
  var iconCastellanos = {
       url: '/img/marker3.svg',
       size: new google.maps.Size(50,110),
       origin: new google.maps.Point(0,0),
       anchor: new google.maps.Point(10,90)
 };

  var locCastellanosMarker = new google.maps.Marker({
    position: locCastellanos,
    map: mapCastellanos,
    title: "Castellanos & Asociados",
    animation: google.maps.Animation.DROP,
    icon: iconCastellanos
  });

//  function toggleBounce() {
//    if (locCastellanosMarker.getAnimation() !== null) {
//      locCastellanosMarker.setAnimation(null);
//    } else {
//      locCastellanosMarker.setAnimation(google.maps.Animation.BOUNCE);
//    }
//  }
//  locCastellanosMarker.addListener('click', toggleBounce);
};
