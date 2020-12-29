const gtts = require('node-gtts')('en')
const fs = require('fs');
const { spawn } = require("child_process");

module.exports = {
    run: function(text_to_speak) {
        gtts.save('./src/audio.wav', text_to_speak, () => {
            var ffplay = spawn('ffplay', ['src/audio.wav', '-nodisp', '-autoexit'])
            ffplay.on("close", code => {
                fs.unlinkSync('./src/audio.wav')
            });
        })
    }
}

module.exports.run("Hello, I'm mavis, your personal assistant!")