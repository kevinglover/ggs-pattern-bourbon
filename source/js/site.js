(function(){
  
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
  
  // Init Peakaboo 
  $(function() {
    
    var $peakaboo = $("header.peakaboo"),
        offset = $peakaboo.offset().top,
        $mini = $peakaboo.clone().addClass('mini');
        
        $mini.insertAfter($peakaboo);
    
    var scrollTimer = null;
    $(window).scroll(function () {
        handleScroll();
    });

   function handleScroll(){
      var scrollBP = offset + $peakaboo.height()*0.75;
      var scrollTop = $(this).scrollTop();
      if (scrollTop > scrollBP){
        $mini.css({'display':'block'});
        $peakaboo.addClass('p-hidden');
      }
      else{
        $mini.css({'display':'none'});
        $peakaboo.removeClass('p-hidden');
      }
      
      if (scrollTop > (scrollBP + $peakaboo.height()) ){
        $mini.addClass('shadow');
      }
      else{
        $mini.removeClass('shadow');
      }
    }
    
  });
  
})(this);
