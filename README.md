# PeerJS server done with NextJS v14 (app router) using an Express custom server

## This project can be a good reference point to learn how to use a custom server on the latest NextJS as of Feb 2024.
## PeerJS server is run on the `/api` path while all other routes are handled by next server; This means that you can still render NextJS pages.
####    You can always configure PeerJS server to run on a different path by changing `/api` to whatever you like in the `server.ts` file.
####    You can also run a PeerJS server only without NextJS routes by ommiting the respective code block in the `server.ts` file (`server.all...`). This is useful if you want PeerJS to run on the index path '/'.

<br>
<hr>

## Please note that as of now, NextJS custom server cannot be deployed on Vercel. Heroku is a good alternative.
