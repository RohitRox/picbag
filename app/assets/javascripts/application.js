// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
  var counter = 0;
  var mouseX = 0;
  var mouseY = 0;
  
  $("#imgtag img").click(function(e){ // make sure the image is click
    var imgtag = $(this).parent(); // get the div to append the tagging entry
    mouseX = e.pageX - $(imgtag).offset().left; // x and y axis
    mouseY = e.pageY - $(imgtag).offset().top;
    $('#tagit').remove(); // remove any tagit div first
    $(imgtag).append('<div id="tagit"><div class="box"></div><div class="name"><div class="text">Type any name or tag</div><input type="text" name="txtname" id="tagname" /><input type="button" name="btnsave" value="Save" id="btnsave" /><input type="button" name="btncancel" value="Cancel" id="btncancel" /></div></div>');
    $('#tagit').css({top:mouseY,left:mouseX});
    
    $('#tagname').focus();
  });
  
  $('#tagit #btnsave').live('click',function(){
    name = $('#tagname').val();
    counter++;
    $('#taglist ol').append('<li rel="'+counter+'"><a>'+name+'</a> (<a class="remove">Remove</a>)</li>');
    $('#imgtag').append('<div class="tagview" id="view_'+counter+'"></div>');
    $('#view_' + counter).css({top:mouseY,left:mouseX});
    $('#tagit').fadeOut();
    // add backend code here,  mouseX and mouseY for the axis and counter.
    // ............
    
    
  });
  
   $('#tagit #btncancel').live('click',function(){
    $('#tagit').fadeOut();
    
  });
  
  $('#taglist li').live('mouseover mouseout',function(event){
    id = $(this).attr("rel");
    if (event.type == "mouseover"){
      $('#view_' + id).show();
    }else{
      $('#view_' + id).hide();
    }
  });
  
  $('#taglist li a.remove').live('click',function(){
    id = $(this).parent().attr("rel");
    $(this).parent().fadeOut('slow');
    $('#view_' + id).remove();
  });
});
