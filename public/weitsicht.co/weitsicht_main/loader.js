$(document).ready(function() {
  // https://api.typeform.com/v1/form/SfAf6J?key=99151ac80f897f6cd780d9f7fed2ca2d725c3497
  $.getJSON('https://api.typeform.com/v1/form/SfAf6J?key=99151ac80f897f6cd780d9f7fed2ca2d725c3497&order_by[]=date_submit,desc', function(data) {
    console.log(data);

    var privacy = []

    // Loop over the responses
    for(var i = 0; i < data.responses.length; i++) {

      var category = data.responses[i].answers.dropdown_49263331
      console.log(category);

      if (category === "Security") {
        privacy.push(data.responses[i]);
      }

      // Get the keys to each answer within a response
      var keys = Object.keys(data.responses[i].answers);

      var answers = data.responses[i].answers;

      var div = $('<div class="answer"></div>');

      if(answers['textfield_49271969']) {
          var a = $('<div class="category">'+answers.textfield_49271969+'</div>')
          div.append(a);
      }

      if(answers['dropdown_49263331']) {
          var b = $('<div class="name">'+answers.dropdown_49263331+'</div>')
          div.append(b);
      }

      if(answers['textfield_49263353']) {
          var c = $('<div class="title">'+answers.textfield_49263353+'</div>')
          div.append(c);
      }

      if(answers['textarea_49263566']) {
          var d = $('<div class="text">'+answers.textarea_49263566+'</div>')
          div.append(d);
      }



      // for(var j = 0; j < Object.keys(data.responses[i].answers).length; j++) {
      //
      //   // Append the answer to the answer Division
      //   var answer = data.responses[i].answers[keys[j]];
      //   div.append(answer);
      // }
      $('#answers').append(div);
    }

  })
});
