document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitForm').addEventListener('click', function() {

    // Retrieve the title and URL of the current website
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const title = tabs[0].title;
      const url = tabs[0].url;

      const formUrl = `https://nottheonlyone.org/add_item?title=${encodeURIComponent(title)}&link=${encodeURIComponent(url)}`;

      // Open the Google Form in a new tab
      chrome.tabs.create({ url: formUrl });


    });
  });
});

