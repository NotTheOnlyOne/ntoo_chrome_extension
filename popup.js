document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitForm').addEventListener('click', function() {
    // Handle the click event for "Submit to Google Forms" menu item

    // Retrieve the title and URL of the current website
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const title = tabs[0].title;
      const url = tabs[0].url;

      alert(title);
      alert(url);


      // Construct the form data
      const formData = new FormData();
      formData.append('entry.123456789', title); // Replace '123456789' with the actual field ID for the Title field
      formData.append('entry.987654321', url); // Replace '987654321' with the actual field ID for the URL field

      // Send the form data to the Google Form submission URL
      fetch('https://docs.google.com/forms/d/e/1FAIpQLScqWMQsFNLQZ3sMQue8cG9zFF5gP-soiJcbPE9WNm0dmiLSHA/formResponse', {
        method: 'POST',
        body: formData
      })
        .then(function(response) {
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Form submission failed.');
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    });
  });
});

