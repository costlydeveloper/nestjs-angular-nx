const pinoPretty = require('pino-pretty');

module.exports = function pinoPrettyTransport(opts) {
  return pinoPretty({
    ...opts,
    /!*messageFormat(log, messageKey, levelLabel) {
          if (log.req)
            return `${log.req.method} ${log.req.url} - ${log.responseTime}ms`;
          return `${log.msg}`;
        },
  });
};
