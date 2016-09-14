$(function() {
  $.scrollify({
    section : ".snap",
    sectionName : "false",
    interstitialSection : ".snaplittle",
    easing: "easeOutExpo",
    scrollSpeed: 1300,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    before:function() {},
    after:function() {},
    afterResize:function() {
      $.scrollify.update();
    },
    afterRender:function() {}
  });

  $("#down").click(function(){
    $.scrollify.next();
  });
  $("#up").click(function(){
    $.scrollify.previous();
  });

});
