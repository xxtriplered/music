const axios = require("axios")
const urls = ["https://music-bot-v3.bruhhhstw.repl.co"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
