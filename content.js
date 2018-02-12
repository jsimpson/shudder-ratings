chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      var title = document.getElementsByClassName('series-title')[0].innerText;
      var year = document.getElementsByClassName('series-year')[0].innerText.split(' ')[0];
      sendResponse({ title: title, year: year });
    }
  }
);
