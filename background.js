chrome.action.onClicked.addListener(async (tab) => {
  const [tabId] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tabId.id },
    files: ['content.js']
  }, () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      alert("I'm here!");
    }
  });
});
