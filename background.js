// background.js
chrome.action.onClicked.addListener(tab => {
  if (!tab || !tab.url) return;           // ignore chrome://, new-tab, etc.
  const ezUrl = `https://login.ezp-prod1.hul.harvard.edu/login?url=${tab.url}`;
  chrome.tabs.update(tab.id, { url: ezUrl });
});