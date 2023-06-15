document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitForm').addEventListener('click', function() {
    // Handle the click event for "Submit to Google Forms" menu item

    // Retrieve the title and URL of the current website
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const title = tabs[0].title;
      const url = tabs[0].url;

      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScqWMQsFNLQZ3sMQue8cG9zFF5gP-soiJcbPE9WNm0dmiLSHA/viewform?entry.759453538=${encodeURIComponent(title)}&entry.1621102160=${encodeURIComponent(url)}`;

      // Open the Google Form in a new tab
      chrome.tabs.create({ url: formUrl });


    });
  });
});

