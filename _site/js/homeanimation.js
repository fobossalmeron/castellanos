
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .13}});

var logoScene = new ScrollMagic.Scene({triggerElement: "#logocontainer", offset:100})
        .setClassToggle("#logocontainer", "disapear")
        .addTo(controller);
var logoScene2 = new ScrollMagic.Scene({triggerElement: "#logocontainer"})
        .setClassToggle('#asidelogo', 'slidein')
        .addTo(controller);

var DataScene1 = new ScrollMagic.Scene({triggerElement: "#data1"})
        .setClassToggle("#data1", "appear")
        .addTo(controller);
var DataScene1h2 = new ScrollMagic.Scene({triggerElement: "#data1"})
        .setClassToggle('#data1 h2', 'slidein')
        .addTo(controller);
var DataScene1p = new ScrollMagic.Scene({triggerElement: "#data1"})
        .setClassToggle('#data1 p', 'slidein')
        .addTo(controller);

var DataScene2 = new ScrollMagic.Scene({triggerElement: "#data2",})
        .setClassToggle("#data2", "appear")
        .addTo(controller);
var DataScene2h2 = new ScrollMagic.Scene({triggerElement: "#data2",})
        .setClassToggle("#data2 h2", "slidein")
        .addTo(controller);
var DataScene2p = new ScrollMagic.Scene({triggerElement: "#data2",})
        .setClassToggle("#data2 p", "slidein")
        .addTo(controller);

var DataScene3 = new ScrollMagic.Scene({triggerElement: "#data3",})
        .setClassToggle("#data3", "appear")
        .addTo(controller);
var DataScene3h2 = new ScrollMagic.Scene({triggerElement: "#data3",})
        .setClassToggle("#data3 h2", "slidein")
        .addTo(controller);
var DataScene3p = new ScrollMagic.Scene({triggerElement: "#data3",})
        .setClassToggle("#data3 p", "slidein")
        .addTo(controller);

var DataScene4 = new ScrollMagic.Scene({triggerElement: "#data4",})
        .setClassToggle("#data4", "appear")
        .addTo(controller);
var DataScene4h2 = new ScrollMagic.Scene({triggerElement: "#data4",})
        .setClassToggle("#data4 h2", "slidein")
        .addTo(controller);
var DataScene4p = new ScrollMagic.Scene({triggerElement: "#data4",})
        .setClassToggle("#data4 p", "slidein")
        .addTo(controller);
var logoScene3 = new ScrollMagic.Scene({triggerElement: "#data4", offset:100})
        .setClassToggle('#asidelogo', 'slidefooter')
        .addTo(controller);
