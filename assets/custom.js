$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        setTimeout(function () {
        var twoHeight = $("#shopify-section-header").height();
        var tottleHeight = twoHeight + "px";
        $("#menu-drawer").css("min-height", "calc(100vh - "+tottleHeight+")");
        },100);
    } else {
      setTimeout(function () {
      var oneHeight = $("#shopify-section-announcement-bar").height();
      var twoHeight = $("#shopify-section-header").height();
      var tottleHeight = oneHeight + twoHeight + "px";
      $("#menu-drawer").css("min-height", "calc(100vh - "+tottleHeight+")");
      },100);
    }
});