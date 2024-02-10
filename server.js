// server.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Serve the Next.js application
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const httpServer = server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });

  // Create and attach the PeerJS server
  const peerServer = ExpressPeerServer(httpServer, {
    debug: true,
    path: '',
  });

  server.use('/', peerServer);
});
