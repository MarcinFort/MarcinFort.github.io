$(document).ready(function(){

// Antibot field handler
  
  $(document).on("submit", "form", function(e) {	
    if ($('input[type="antibot"]').val().length > 0) {
      e.preventDefault();
      console.log('The antibot field was filled!');
      return false;
    } else {
      $('form').unbind('submit');
      $('form').submit();
    }
  });
  
// Section scroll animation  
  
  $('#menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

});
