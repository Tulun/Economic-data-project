'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.register(require('inert'), (err) => {
  if (err) {
      throw err;
  }

  server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
          reply.file('./index.html');
      }
  });

  server.start(() => {
   console.log('Server is running at: ', server.info.url)
  });

});

