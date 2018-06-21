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
    correo: elia.cid
  - nombre: Luis Fernando Lazcano y Ramírez
    descripcion: Exfuncionario del ahora Tribunal Federal de Justicia Administrativa, experiencia en litigios contencioso - administrativos y constitucionales por veintidos años.
    correo: fernando.lazcano
  - nombre: José Luis Pérez Martínez
    descripcion: Abogado con experiencia en litigios contencioso - administrativo y constitucionales por quince años
    correo: joseluis.perez
  - nombre: Gustavo Flores Trujillo
    descripcion: Abogado con experiencia en litigios contencioso - administrativo y constitucionales por ocho años.
    correo: gustavo.flores
  - nombre: Penélope Yadira Hernández Calvario
    descripcion: Abogada con experiencia en litigios contencioso - administrativo y constitucionales por cinco años.
    correo: penelope.hernandez
  - nombre: Eduardo Olivelia Hernández
    descripcion: Exfuncionario del ahora Tribunal Federal de Justicia Administrativa, catedrático de las Maestrías de Derecho Administrativo y Derecho Fiscal en el Centro de Estudios Tecnológicos y Universitarios IAMP.
    correo: eduardo.olivelia 
  - nombre: Teódulo Ángeles Espino
    descripcion: Licenciado en Derecho por la Universidad Nacional Autónoma de México, con más de 44 años de experiencia en materias como Derecho Administrativo, Fiscal y Constitucional. Se ha desempeñado en diversos puestos dentro de la Administración Pública Federal y el Poder Judicial de la Federación, tales como Secretario de Estudio y Cuenta de la Suprema Corte de Justicia de la Nación, o bien, Secretario Proyectista en Tribunales Colegiados.
    correo: teodulo.angeles  
  - nombre: Jesús Alberto Vargas Hernández
    descripcion: "Especialidad en Derecho Fiscal por la Universidad de las Américas Puebla (UDLAP). Especialidad en Derecho Administrativo Económico por la Pontificia Universidad Católica do Rio. En curso: Maestría en Derecho Procesal Constitucional por la Universidad Panamericana. Experiencia: un año en elaboración y corrección de contratos de venta de energía eléctrica en el Mercado Eléctrico Mayorista de Brasil; dos años en órganos jurisdiccionales del Poder Judicial de la Federación."
    correo: alberto.vargas
  - nombre: Juan Carlos Calvillo Valladolid
    descripcion: Egresado del Centro de Estudios Tecnológicos y Universitarios, IAMP. Servicio Social y meritorio en el Tribunal Federal de Justicia Administrativa. Experiencia de cuatro años en litigio contencioso administrativo y amparo.
    correo: juancarlos.calvillo
  - nombre: María Isabel Sánchez Oyamburu
    descripcion: Ex funcionaria en la Contraloría General de la Ciudad de México y de la Secretaría de Seguridad Pública de la misma entidad. Abogada con experiencia de 10 años en litigio de marcas y patentes; con estudios de Especialidades en Derecho Económico Corporativo, Derecho de la Propiedad Industrial e Intelectual, así como en Derecho de Amparo en la Universidad Panamericana.
    correo: isabel.sanchez
---
<span class="spanspacer"></span>
{% for abogado in page.abogados %}
<section class="halfcard">
<h2>{{ abogado.nombre }}</h2>
<p>{{ abogado.descripcion }}</p>
<a class="spanmargin" href="mailto:{{abogado.correo}}@castellanosasociados.com"><b>{{ abogado.correo }}</b> @castellanosasociados.com</a>
</section>
{% endfor %}

<section class="card">*Se cuenta con el apoyo y asesoría de diversos exfuncionarios del Poder Judicial de la Federación, así como del Tribunal Federal de Justicia Administrativa separados de sus cargos por haber vencido la vigencia de su nombramiento o por encontrarse jubilados.</section>
