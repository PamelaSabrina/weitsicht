$(document).ready(function() {

  // Typeform: Call API
  $.getJSON('https://api.typeform.com/v1/form/SfAf6J?key=99151ac80f897f6cd780d9f7fed2ca2d725c3497&order_by[]=date_submit,desc', function(data) {
    console.log(data);

    var privacy = ["Settings"]

    // Loop over the responses
    for(var i = 0; i < data.responses.length; i++) {

      var category = data.responses[i].answers.dropdown_50447633

      if (category === "Spotify") {
        privacy.push(data.responses[i]);

        // Get the keys to each answer within a response
        var keys = Object.keys(data.responses[i].answers);
        var answers = data.responses[i].answers;
        var div = $('<div class="flex-item"></div>');

        // THIS NEEDS AN IMAGE OPTION ADDED IN TYPEFORM AND THE HOOKS EDITED BELOW

        if(answers['dropdown_50447633']) {
            var a = $('<div class="category">'+answers.dropdown_50447633+'</div>')
            div.append(a);
        }

        if(answers['textarea_50277200']) {
            var d = $('<span class="myBtn">'+answers.textarea_50046657+'</span><div id="modal"><div class="modal-content"><span class="close">&times;</span><div class="popup-title">'+answers.textarea_50046657+'</div><div class="popup-author">Author:&nbsp;&nbsp;'+answers.textfield_49271969+'</div><div><img class="popup-image" src='+answers.fileupload_50277123+'></div><div class="popup-answer">'+answers.textarea_50277200+'</div><div><img class="popup-image" src='+answers.fileupload_50277211+'></div></div></div>')
            div.append(d);
        }

        if(answers['textfield_49271969']) {
            var a = $('<div class="author">Author:&nbsp;&nbsp;'+answers.textfield_49271969+'</div>')
            div.append(a);
        }

        if(answers['fileupload_50277123']) {
            var c = $("<img class='post-image' src='"+answers.fileupload_50277123+"'>")
            div.append(c);
        }


      }

      $('#answers').append(div);
    }

    // Opening & closing conent models
    $(".close").click(function(){
      $(this).parents("#modal").hide();
    });

    $(".myBtn").click(function() {
      $(this).next("#modal").show();
    });

    // Scrolling fade function
    $(function() {
      $('body').removeClass('fade-out');
    });

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      $('.logo_container, .slogan, #arrow_container').css({
          'opacity': ((height - scrollTop) / height)
      });
    });
  })
});
