var rs = require('random-strings');

module.exports = function setupUrlLogging (log) {
    log = log || console.log;

    return function (req, res, next) {
        var hash = rs.hex(6);
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var start = Date.now();
        var method = req.method;
        var url = req.url;
        var referer = req.headers.referer || "";
        var ua = req.headers['user-agent'];

        log(hash, method, url, referer, ua, ip);

        res.on('finish', function() {
            var code = res._header ? String(res.statusCode) : String(-1);
            var duration = Date.now() - start;
            log(hash, duration+'ms', '('+code+')');
        });

        next();
    };
};
