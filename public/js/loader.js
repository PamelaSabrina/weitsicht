$(document).ready(function() {

  // Typeform: Call API
  $.getJSON('https://api.typeform.com/v1/form/SfAf6J?key=99151ac80f897f6cd780d9f7fed2ca2d725c3497&order_by[]=date_submit,desc', function(data) {
    console.log(data);

    var privacy = []

    // Loop over the responses
    for(var i = 0; i < data.responses.length; i++) {

      var category = data.responses[i].answers.list_50045143_choice

      if (category === category) {
        privacy.push(data.responses[i]);

        // Get the keys to each answer within a response
        var keys = Object.keys(data.responses[i].answers);
        var answers = data.responses[i].answers;
        var div = $('<div class="flex-item"></div>');

        if(answers['fileupload_50047123']) {
            var c = $("<img class='post-image' src='"+answers.fileupload_50047123+"'>")
            div.append(c);
        }

        if(answers['textfield_50047016']) {
            var c = $('<div class="title">'+answers.textfield_50047016+'</div>')
            div.append(c);
        }

        if(answers['textfield_49271969']) {
            var a = $('<div class="category">'+answers.textfield_49271969+'</div>')
            div.append(a);
        }

        if(answers['list_50045143_choice']) {
            var b = $('<div class="name">'+answers.list_50045143_choice+'</div>')
            div.append(b);
        }

        if(answers['textarea_50047044']) {
            var d = $('<button class="myBtn">Read more...</button><div id="modal"><div class="modal-content"><span class="close">&times;</span><p>'+answers.textarea_50047044+'</p></div></div>')
            div.append(d);
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
      $('.logo_container, .slogan').css({
          'opacity': ((height - scrollTop) / height)
      });
    });
  })
});
