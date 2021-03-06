const collections = require('./src/collections');
const mavis_local_clients = require('mavis-local-clients');
const mavis_webui = require('mavis-webui');
const network_num = require('./src/network_num');
const network_str = require('./src/network_str');
const speak = require('./src/speak');
const speech_rec = require('./src/speech_rec');

module.exports = {
    collections: collections,
    mavis_local_clients: mavis_local_clients,
    mavis_webui: mavis_webui,
    network_num: network_num,
    network_str: network_str,
    speak: speak,
    speech_rec: speech_rec
}