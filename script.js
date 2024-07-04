function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  
  // Redirect to the scanned URL
  window.location.href = decodedText;
}

function onScanError(errorMessage) {
  // Handle on error condition, with error message
  console.error(`Scan error: ${errorMessage}`);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess, onScanError);


// https://blog.minhazav.dev/research/html5-qrcode.html
// https://scanapp.org/html5-qrcode-docs/docs/intro