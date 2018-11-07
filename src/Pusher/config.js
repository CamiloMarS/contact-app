/**
 * Variables y configuraciones de PusherJS
 */

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "641751",
  KEY: "bbd7118a809e7e1bdb55",
  secret: "f0bafef2f47517ed5a85",
  cluster: "us2",
  encrypted: true
});

module.exports = pusher;
