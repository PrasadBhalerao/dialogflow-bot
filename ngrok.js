
const ngrok = require('ngrok');

(async function () {

    const url = await ngrok.connect({
        proto: 'http',
        addr: 8080
    });

    console.log(url)

})();