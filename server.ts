// server.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const next = require('next');

const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, hostname, port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Create and attach the PeerJS server
  const httpServer = server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });

  const peerServer = ExpressPeerServer(httpServer, {
    debug: true,
    path: '/',
  });

  // Use the PeerJS server on the '/peerjs' path
  server.use('/api', peerServer);

  // Serve the Next.js application for all other routes
  // This handler is placed after the PeerJS middleware to ensure
  // that requests to '/peerjs' are not caught by this handler
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
});
