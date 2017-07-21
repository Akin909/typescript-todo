"use strict";
exports.__esModule = true;
var hapi = require("hapi");
var port = parseInt(process.env.PORT, 10) || 4001;
var server = new hapi.Server();
server.connection({ port: port });
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('hello world');
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("server running on port " + port);
});
//export function init(): Promise<HapiServer> {}
