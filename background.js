var testcase_items = new Array();
var active = false;
var empty = true;
var tab_id = null;
console.log('init');
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "append") {
    testcase_items[testcase_items.length] = request.obj;
    empty = false;
    sendResponse({});
  }
  if (request.action == "poke") {
    testcase_items[testcase_items.length - 1] = request.obj;
    sendResponse({});
  }
  if (request.action == "get_status") {
    if ( !active ) {
      //, lastFocusedWindow : true
      chrome.tabs.query({
        active : true
      }, function(tab){
        sendResponse({'active': active, 'empty': empty});
      });


    //  chrome.tabs.query({
    //    //active : true
    ////    //, lastFocusedWindow : true
    //  }, function(tab){
    //    sendResponse({'active': active, 'empty': empty});
    //  });
    }
    else {
      sendResponse({'active': active, 'empty': empty});
    }
  }
  //
  if (request.action == "get_tab_details") {
    alert(33);
    chrome.tabs.query({
       active : true
      //,       lastFocusedWindow : true
    }, function(tab){
      alert('TABSSSS ' + tab[0].url);
         sendResponse({'details': tab[0].url});
    });
  }

  if (request.action == "start") {
  	if(!active) {
  	    active = true;
  	    empty = true;
  	    testcase_items = new Array();
  	    tab_id = request.recorded_tab;
  	    chrome.tabs.update(tab_id, {url: request.start_url}, function(tab) {
          alert("You are now recording your test sequence.");
          chrome.tabs.sendMessage(tab_id, {action: "open", 'url': request.start_url});
          sendResponse({start: true});
  	    });
  	}
  }
  if (request.action == "stop") {
    active = false;
    chrome.tabs.sendMessage(tab_id, {action: "stop"});
    sendResponse({});
  }
  if (request.action == "get_items") {
	sendResponse({'items': testcase_items});
  }
  if (request.action == "log") {
    //sendResponse({'items': testcase_items});
    alert(JSON.stringify(request));
  }
});

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.windows.create({
    url: 'popup/control.html',
    left: 50,
    top: 10,
    width : 300,
    height : 600,
    focused : true,
    type: 'popup'
  }, function(win){

    //console.log(win);
    //
    //win.onload = function(e) {
    //  alert('loaded');
    //  chrome.tabs.query({active: true}, function (tab) {
    //    alert(tab[0].url);
    //    win.content.document.querySelector('input[name="url"]').value = tab[0].url;
    //    win.content.document.querySelector('h1').innerHTML = tab[0].url;
    //  });
    //}

    //win.moveTo(
    //    window.screen.width - 350,
    //    50
    //);
    //win.resizeTo(
    //    300,
    //    window.screen.height - 100
    //)
  });
});