$(document).ready(function() {
  $("img#hello").click(function() {
    $("ul#catwords").prepend("<li>MEOW! this is prepended</li>");
    $("ul#dogwords").prepend("<li>WUFF! this is prepended</li>");

    $("ul#catwords").children("li").first().click(function() {
      $(this).remove();
  });

    $("ul#dogwords").children("li").first().click(function() {
      $(this).remove();
  });
});
    $("img#goodbye").click(function() {
      $("ul#catwords").append("<li>Goodbye doggy! This is appended!</li>");
      $("ul#dogwords").append("<li>Goodbye kitty This is appended!!</li>");
      $("ul#catwords").children("li").first().click(function() {
        $(this).remove();
      });

        $("ul#dogwords").children("li").first().click(function() {
          $(this).remove();
      });
    });
  });


// (.before) ().after)
