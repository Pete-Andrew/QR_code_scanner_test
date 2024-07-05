
const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
        width: 250,
        height: 250,
    },
    fps: 20,
});

scanner.render(success, error);

function success(result) {
    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    <p><a href="${result}">${result}</a></p>
    `;

    scanner.clear();
    document.getElementById('reader').remove();
}

function error(err) {
    console.error(err);
};

// https://www.youtube.com/watch?v=19eo39lqpLM&ab_channel=OpenJavaScript     <<<<<< this link is a tutorial to set this up
// https://blog.minhazav.dev/research/html5-qrcode.html
// https://scanapp.org/html5-qrcode-docs/docs/intro