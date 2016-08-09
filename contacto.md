---
layout: page
title: Contacto
permalink: /bolsadetrabajo/
---

* ubicación (mapa de Google Maps)

* teléfonos

<div id="map"></div>

<form action="https://formspree.io/{{ site.email }}" method="POST">
    <label for="name">Nombre:</label>
      <input type="text" name="name">
    <label for="name">Email:</label>
      <input type="email" name="_replyto">
    <label for="message">Mensaje:</label>
      <textarea type="text" name="message"></textarea>
    <input type="submit" value="Send">
</form>
