chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "highlight") {
    var highlightedText = window.getSelection().toString();
    var pageTitle = document.title;
    var pageUrl = window.location.href;

    if (highlightedText !== "") {
      // Send data to Google Form
      var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScqWMQsFNLQZ3sMQue8cG9zFF5gP-soiJcbPE9WNm0dmiLSHA/formResponse";
      var formData = new FormData();
      formData.append("entry.123456789", pageTitle); // Replace with the appropriate entry ID
      formData.append("entry.987654321", pageUrl); // Replace with the appropriate entry ID
      formData.append("entry.246813579", highlightedText); // Replace with the appropriate entry ID

      var xhr = new XMLHttpRequest();
      xhr.open("POST", formUrl, true);
      xhr.send(formData);

      // Optional: Provide user feedback
      alert("Text highlighted and submitted successfully!");
    } else {
      alert("No text selected!");
    }
  }
});
