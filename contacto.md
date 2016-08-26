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

<script src="{{site.baseurl}}js/map.js"></script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLQc8Mu-fjVVgkBV77SKMaYiGJV0jaRQw&callback=initMap">
</script>
