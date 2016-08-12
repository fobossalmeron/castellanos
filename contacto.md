---
layout: page
title: Contacto
permalink: contacto/
---

<section class="cards">
<div class="halfcard">
Teléfonos: 55 00 00 00 | 55 00 00 00

<form action="https://formspree.io/{{ site.email }}" method="POST">
    <label for="name">Nombre</label>
      <input type="text" name="name"><br>
    <label for="name">Email</label>
      <input type="email" name="_replyto"><br>
    <label for="message">Mensaje</label>
      <textarea type="text" name="message"></textarea><br>
    <input class="submitbutton" type="submit" value="Enviar">
</form>

</div>
<div class="halfcard">
<div id="map"></div>
</div>
</section>

<script>
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
    </script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLQc8Mu-fjVVgkBV77SKMaYiGJV0jaRQw&callback=initMap">
</script>
