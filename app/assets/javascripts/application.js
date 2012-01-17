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
    var counter = 100;
    var mouseX = 0;
    var mouseY = 0;
    var tag_div = $('#tagit').html();
    $('#tagit').remove();

    $("#imgtag img").click(function(e){ // make sure the image is click
      var imgtag = $(this).parent(); // get the div to append the tagging entry
      mouseX = e.pageX - $(imgtag).offset().left; // x and y axis
      mouseY = e.pageY - $(imgtag).offset().top;

      $('#tagit').remove(); // remove any tagit div first

      $(imgtag).append('<div id="tagit">'+tag_div+'</div>');

      $('#tagit').css({top:mouseY,left:mouseX});

      $('#tagit form').append('<input type="hidden" name="tag[x_cord]" value="'+mouseX+'"   />');
      $('#tagit form').append('<input type="hidden" name="tag[y_cord]" value="'+mouseY+'"   />');
      $('#tagname').focus();
    });

    $('#tagit #btnsave').live('click',function(){
      name = $('#tagname').val();
      counter++;
      $('#taglist ol').append('<li rel="'+counter+'"><a>'+name+'</a> (<a class="remove">Remove</a>)</li>');
      $('#imgtag').append('<div class="tagview" id="view_'+counter+'"></div>');
      $('#view_' + counter).css({top:mouseY,left:mouseX});
      $('#tagit').fadeOut();

      // backend code here, use mouseX and mouseY for the axis and counter.
      //alert(mouseX+"  and  "+mouseY+" and "+name );

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

