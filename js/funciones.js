
    $("#iconomenu").click(function () {
      $("#menu").slideToggle();
    });
     
// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contenedormenu").toggleClass("abrirmenu");
});

// Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

///acordeon

$(".titulo1").click(function(){
  $(".contenido1").slideToggle();
  $(".mas1").toggleClass("desaparecer");
})
$(".titulo2").click(function(){
  $(".contenido2").slideToggle();
  $(".mas1").toggleClass("desaparecer");
})
$(".titulo3").click(function(){
  $(".contenido3").slideToggle();
  $(".mas1").toggleClass("desaparecer");


})


<script type="text/javascript">
$(document).ready(function () {
  $('#slider1').tinycarousel(); });
</script> 
