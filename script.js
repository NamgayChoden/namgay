// #hide show
$(document).ready(function(){
    $(".qq").click(function(){
      $(".q1").hide();
    });
      $(".q2").click(function(){
        $(".q1").show();
    });
  });

//   fade
  $(document).ready(function(){
    $(".q3").click(function(){
      $(".w1").fadeTo("slow", 0.4);
    });
});
// slide-down
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow");
    });
  });
//   slide left
$(document).ready(function(){
  $(".star").click(function(){
    $(".okay").animate({left: '250px'});
  });
});
// stop
$(document).ready(function(){
    $(".qwe").click(function(){
      $(".qaz").slideDown(5000);
    });
    $(".wer").click(function(){
      $(".qaz").stop();
    });
  }); 
// 
  $(document).ready(function(){
    $(".hide").click(function(){
      $(".quotes").hide(1000);
      alert("The paragraph is now hidden");
    });
  });
// Callbackp-
  $(document).ready(function(){
    $("button").click(function(){
      $(".p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });
// Chaining
  $(document).ready(function(){
    $(".b1").click(function(){
      $(".p1").css("color", "blue")
        .slideUp(2000)
        .slideDown(2000);
    });
  });
// Get
  $(document).ready(function(){
    $("#peach").click(function(){
      alert("Text: it feels good" + $("#test").text());
    });
    $("#plum").click(function(){
      alert("HTML: learning HTML is fun! " + $("#test").html());
    });
  });
 
  // Set
  $(document).ready(function(){
    $("#b1").click(function(){
      $("#tub").text("Hye there! Keep going,you can do it");
    });
    $("#b2").click(function(){
      $("#mingo").html("<b>Hye there! Keep going,you can do it</b>");
    });
    $("#b3").click(function(){
      $("#yayaTub").val("Enjoy your day!");
    });
  });

  // Add
$(document).ready(function(){
  $("#R1").click(function(){
    $("#loey").append(" <b>Appended text</b>.");
  });

  $("#R2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});

// Remove
$(document).ready(function(){
  $("#jk").click(function(){
    $("#gauva").remove();
  });
});

// Add classes to element
$(document).ready(function(){
  $("#ab1").click(function(){
    $(".w1, .w2, .classes").addClass("blue");
    $("classes").addClass("important");
  });
});

// CSS()
$(document).ready(function(){
  $("#g1").click(function(){
    alert("Background color = " + $("p").css("background-color"));
  });
});

// Dimensions
$(document).ready(function(){
  $("#l1").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#z1").width() + "</br>";
    txt += "Height of div: " + $("#z1").height();
    $("#z1").html(txt);
  });
});
