$(document).ready(function() {

  // Typeform: Call API
  $.getJSON('https://api.typeform.com/v1/form/SfAf6J?key=99151ac80f897f6cd780d9f7fed2ca2d725c3497&completed=true&order_by[]=date_submit,desc&limit=1', function(data) {
    console.log(data);

    var privacy = []

    // Loop over the responses
    for(var i = 0; i < data.responses.length; i++) {

      var category = data.responses[i].answers.list_50045143_choice

      if (category === "Web Language", "Settings", "Future") {
        privacy.push(data.responses[i]);

        // Get the keys to each answer within a response
        var keys = Object.keys(data.responses[i].answers);
        var answers = data.responses[i].answers;
        var div = $('<div class="flex-item"></div>');

        // Author
        if(answers['textfield_49271969']) {
            var a = $('<div class="author">Latest entry from the community\r\n'+answers.textfield_49271969+'&nbsp;wrote about:</div>')
            div.append(a);
        }


        // Future
        if(answers['textarea_50051241']) {
            var d = $('<span class="myBtn">'+answers.textfield_50055468+'</span><div id="modal"><div class="modal-content"><span class="close">&times;</span><div class="popup-title">'+answers.textfield_50055468+'</div><div class="popup-author">'+answers.textfield_49271969+'</div><div><img class="popup-image" src='+answers.fileupload_50879764+'></div><div class="popup-answer">'+answers.textarea_50051241+'</div></div>')
            div.append(d);
        }



        // Language
        if(answers['textarea_50051961']) {
            var d = $('<span class="myBtn">'+answers.textfield_50045819+'</span><div id="modal"><div class="modal-content"><span class="close">&times;</span><div class="popup-title">'+answers.textfield_50045819+'</div><div class="popup-author">'+answers.textfield_49271969+'</div><div class="popup-answer">'+answers.textarea_50051961+'</div><div><img class="popup-image" src='+answers.fileupload_50045924+'></div></div>')
            div.append(d);
        }

        // Settings
        if(answers['textarea_50046657']) {
            var d = $('<span class="myBtn">'+answers.textarea_50046657+'</span><div id="modal"><div class="modal-content"><span class="close">&times;</span><div class="popup-title">'+answers.textarea_50046657+'</div><div class="popup-author">Author:&nbsp;&nbsp;'+answers.textfield_49271969+'</div><div><img class="popup-image" src='+answers.fileupload_50277123+'></div><div class="popup-answer">'+answers.textarea_50277200+'</div><img class="popup-image" src='+answers.fileupload_50277211+'></div></div>')
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
      $('.all, .slogan, #arrow_container').css({
          'opacity': ((height - scrollTop) / height)
      });
    });
  })
});
