---
layout: page
title: Contacto
permalink: contacto/
photo: fondoaboutus
---

<section class="cards">
<div class="halfcard">
<p>Teléfonos: <a href="tel:{{ site.tel1}}"> {{site.tel1}}</a> | <a href="tel:{{ site.tel2}}">{{site.tel2}}</a></p>

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
