(function(){
  
  // Load Fonts
  // WebFontConfig = {
  //   google: { families: [ 'Fira+Sans:300,400,500,700,400italic:latin' ] }
  // };
  // (function() {
  //   var wf = document.createElement('script');
  //   wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  //     '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  //   wf.type = 'text/javascript';
  //   wf.async = 'true';
  //   var s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(wf, s);
  // })();
  
  // Init Material 
  $.material.init();
  
  // Init Selectize 
  $(function() {
    var options = {
      onDropdownOpen: function () {
          $(".selectize-dropdown").hide().slideToggle(250,'easeOutQuad');
      },
      onDropdownClose: function () {
          $(".selectize-dropdown").show().slideToggle(250,'easeInQuad');
      }
    };
    
    $('select').selectize(options);
    
  });
})(this);
