chrome.extension.onConnect.addListener(function(port) {
      port.onMessage.addListener(function(msg) {
          //  console.log("message recieved" + msg);
          //  port.postMessage("Hi Popup.js");
      });

      chrome.tabs.onUpdated.addListener(checkURL);
      chrome.tabs.onActivated.addListener(checkURL);
 })

 // Copyright (c) 2011 The Chromium Authors.

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                       pageUrl: { hostSuffix: 'twitter.com' }
                   }),
              new chrome.declarativeContent.PageStateMatcher({
                       pageUrl: { hostSuffix: 'facebook.com' }
                   }),
              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostSuffix: 'instagram.com' }
                  }),
              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'google.co.uk' }
                  }),
              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'nytimes.com/section/technology' }
                  }),

              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'mail' }
                  }),

              new chrome.declarativeContent.PageStateMatcher({
                          pageUrl: { urlContains: 'bbc.co.uk' }
                      }),

              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'spotify' }
                      }),
              new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'theguardian' }
                      }),
               ],

        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://weitsicht.co/welcome.html"}, function (tab) {
        console.log("Hello! Welcome to the community! http://weitsicht.co/welcome.html");
    });
});
