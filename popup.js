chrome.storage.local.get("isGrayscaleEnabled", ({isGrayscaleEnabled}) => {

  function updateButtonText() {
    document.querySelector("#toggleBtn").innerText = isGrayscaleEnabled ? "Disable" : "Enable";
  }

  updateButtonText();

  document.querySelector("#toggleBtn").addEventListener("click", () => {
    isGrayscaleEnabled = !isGrayscaleEnabled;
    updateButtonText();
    chrome.storage.local.set({isGrayscaleEnabled});
  });
});
