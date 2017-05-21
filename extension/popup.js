//
// window.onload = function () {
//
// }
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//
//   $('#facebook').hide()
//
// 	if (tab.url.indexOf('google') > -1) {
//     $('#google').show()
//   }
//
//   if (tab.url.indexOf('facebook') > -1) {
//     $('#facebook').show()
//   }
//
// });


window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})

$('head').append('<link rel="stylesheet" type="text/css" href="popup.css">');

var port = chrome.extension.connect({
      name: "Social Media"
 });

 chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
           if (tabs[0].url.indexOf("facebook") > -1) {
             $("body").html('<a href="http://archive.weitsicht.co/facebook.html" class="all">Check out the archive</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Are your facebook settings up to date?</h2>')
           }

           if (tabs[0].url.indexOf("google.co.uk") > -1) {
             $("body").html('<a href="http://archive.weitsicht.co/google.html" class="all">Some 2 minute reads here</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Are your Google Settings up to date?</h2>')
           }

           if (tabs[0].url.indexOf("twitter") > -1) {
             $("body").html('<a href="http://www.archive.weitsicht.co/twitter.html" class="all">We can show you how</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>You can make your Twitter account extra safe!</h2>')
           }

           if (tabs[0].url.indexOf("instagram") > -1) {
             $("body").html('<a href="http://www.archive.weitsicht.co/instagram.html" class="all">Did you know that you can delete your Instagram search history?</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>We add some clarity here:</h2>')
           }

           if (tabs[0].url.indexOf("nytimes.com/section/technology") > -1) {
             $("body").html('<a href="https://weitsicht.typeform.com/to/SfAf6J" class="all">We would love to see you become an author!</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Do you like to read the news?</h2>')
           }

           if (tabs[0].url.indexOf("mail") > -1) {
             $("body").html('<a href="https://weitsicht.typeform.com/to/SfAf6J" class="all">We have some advice</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Make your emails safe! Encrypt them!</h2>')
           }

           if (tabs[0].url.indexOf("bbc.co.uk") > -1) {
             $("body").html('<a href="https://weitsicht.typeform.com/to/SfAf6J" class="all">We would love to see you become an author!</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Do you like to read the news?</h2>')
           }

           if (tabs[0].url.indexOf("spotify") > -1) {
             $("body").html('<a href="http://www.archive.weitsicht.co/spotify.html" class="all">Tune in</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Listen to your songs privately!</h2>')
           }

           if (tabs[0].url.indexOf("theguardian") > -1) {
             $("body").html('<a href="https://weitsicht.typeform.com/to/SfAf6J" class="all">We would love to see you become an author!</a>')
             $("body").prepend('<img id="logo" src="logo.svg"/><h2>Do you like to read the news?</h2>')
           }
 });




 // port.postMessage("Hi BackGround");
 // port.onMessage.addListener(function(msg) {
 //      $('body').html(msg)
 //      console.log("message recieved " + msg);
 // });
