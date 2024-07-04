// function onScanSuccess(decodedText, decodedResult) {
//     // handle the scanned code as you like, for example:
//     console.log(`Code matched = ${decodedText}`, decodedResult);
//   }
  
//   function onScanFailure(error) {
//     // handle scan failure, usually better to ignore and keep scanning.
//     // for example:
//     console.warn(`Code scan error = ${error}`);
//   }
  
//   let html5QrcodeScanner = new Html5QrcodeScanner(
//     "reader",
//     { fps: 10, qrbox: {width: 250, height: 250} },
//     /* verbose= */ false);
//   html5QrcodeScanner.render(onScanSuccess, onScanFailure);


// new code block added below >>>>>>>>>>>>>>>>>>>

// function onScanSuccess(decodedText, decodedResult) {
//   // Handle on success condition with the decoded text or result.
//   console.log(`Scan result: ${decodedText}`, decodedResult);
// }

// var html5QrcodeScanner = new Html5QrcodeScanner(
// "reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);

var html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 });
      
function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  // ...
  html5QrcodeScanner.clear();
  // ^ this will stop the scanner (video feed) and clear the scan area.
}

html5QrcodeScanner.render(onScanSuccess);

// function onScanSuccess(decodedText, decodedResult) {
//   // Handle on success condition with the decoded text or result.
//   console.log(`Scan result: ${decodedText}`, decodedResult);
// }

function onScanError(errorMessage) {
  // handle on error condition, with error message
}

var html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);


// https://blog.minhazav.dev/research/html5-qrcode.html
// https://scanapp.org/html5-qrcode-docs/docs/intro