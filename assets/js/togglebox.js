// form http://codepen.io/htmlr/pen/lErGn for collapsable code box
(function($){
  $(function(){
      $('html').toggleClass('no-js js');
      $('.toggle-box .toggle').click(function(e){
          e.preventDefault();

          $(this).next('.content').slideToggle();
      });
  });
})(jQuery);
