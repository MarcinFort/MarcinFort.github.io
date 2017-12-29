$(document).ready(function(){

// Add an antibot field handler
  
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

});
