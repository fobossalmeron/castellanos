---
layout: page
title: Abogados
permalink: /abogados/
photo: dist/abogados.jpg
abogados:
  - nombre: Gustavo Castellanos Díaz del Rivero
    descripcion: Exfuncionario del Poder Judicial Federal, siempre adscrito a juzgados de distrito en materia administrativa, con experiencia de treinta años en litigios contencioso - administrativos y constitucionales.
    correo: gustavo.castellanos
  - nombre: Hugo F. Ramírez Rojas
    descripcion: Litigante en materia contenciosa administrativa y constitucional con experiencia de veinte años.
    correo: hugo.ramirez
  - nombre: Elia Cid Sebastián
    descripcion: Exfuncionaria del Poder Judicial de la Federación, adscrita a juzgados de distrito y Tribunales Colegiados de Circuito, todos en materia administrativa y constitucional, con experiencia en litigios de estas materias por doce años.
    correo: elia.sebastian
  - nombre: Luis Fernando Lazcano y Ramírez
    descripcion: Exfuncionario del ahora Tribunal Federal de Justicia Administrativa, experiencia en litigios contencioso - administrativos y constitucionales por veintidos años.
    correo: fernando.lazcano
  - nombre: José Luis Pérez Martínez
    descripcion: Abogado con experiencia en litigios contencioso - administrativo y constitucionales por veinte años
    correo: joseluis.perez
  - nombre: Ana Areli Chávez Rodríguez
    descripcion: Abogada con experiencia en litigios contencioso - administrativo y constitucionales por diez años.
    correo: areli.chavez
  - nombre: Gustavo Flores Trujillo
    descripcion: Abogado con experiencia en litigios contencioso - administrativo y constitucionales por ocho años.
    correo: gustavo.flores
  - nombre: Penélope Yadira Hernández Canario
    descripcion: Abogada con experiencia en litigios contencioso - administrativo y constitucionales por seis años.
    correo: penelope.hernandez
---
<span class="spanspacer"></span>
{% for abogado in page.abogados %}
<section class="thirdcard">
<h2>{{ abogado.nombre }}</h2>
<p>{{ abogado.descripcion }}</p>
<span><b>{{ abogado.correo }}</b> @castellanosasociados.com</span>
</section>
{% endfor %}

<section class="card">*Se cuenta con el apoyo y asesoría de diversos exfuncionarios del Poder Judicial de la Federación, así como del Tribunal Federal de Justicia Administrativa separados de sus cargos por haber vencido la vigencia de su nombramiento o por encontrarse jubilados.</section>
