$(function() {
  $.scrollify({
    section : ".snap",
    sectionName : "section-name",
    interstitialSection : ".snaplittle",
    easing: "easeOutExpo",
    scrollSpeed: 1300,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  $("#down").click(function(){
    $.scrollify.next();
  });
  $("#up").click(function(){
    $.scrollify.previous();
  });

});
