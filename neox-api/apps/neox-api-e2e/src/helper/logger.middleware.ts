export const loggerPlugin = (fastify, opts, done) => {
  fastify.addHook('onRequest', (request, reply, done) => {
    console.log(`[Test] Incoming Request: ${request.method} ${request.url}`);
    done();
  });

  done();
};
