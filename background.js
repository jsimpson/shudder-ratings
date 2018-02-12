document.addEventListener('DOMContentLoaded', function() {
  var fetchRatingsButton = document.getElementById('fetch-ratings');
  fetchRatingsButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];

      chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" }, function(response) {
        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=fb30d8f4&t=' + encodeURIComponent(response.title) + '&y=' + response.year,
            dataType: 'json',
            success: function(data) {
                var ul = document.getElementById('ratings-list')
                for (var i = 0; i < data.Ratings.length; i++) {
                  var li = document.createElement("li");
                  li.appendChild(document.createTextNode(data.Ratings[i].Source + ': ' + data.Ratings[i].Value));
                  ul.appendChild(li);
                }
            }
        });
      })
    });
  }, false);
}, false);
